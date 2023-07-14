const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/Category");
const cloudinary = require('cloudinary')

exports.createCategory = catchAsyncErrors(async(req,res) => {
    try {

        const newCategory = new Category(req.body)
        const savedCategory = await newCategory.save()
        res.status(200).json({
            success : true ,
            data : savedCategory,
            message : 'Başarılı şekilde kategori oluşturuldu'
        })

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

exports.getAllCategoryOnlyName = catchAsyncErrors(async(req,res) => {
    try {
        const categories = await Category.find().select("name isVictim")
        res.status(200).json({
            data : categories
        })
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

exports.getAllCategory = catchAsyncErrors(async(req,res) => {
    try {
        const categories = await Category.find().select({ name : -1, subcategories : -1 }).populate('subcategories', 'name')
        res.status(200).json({
            data : categories
        })
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


exports.getCategoryDetails = catchAsyncErrors(async(req,res) => {
    try {
        const categoryDetails = await Category.findById(req.params.categoryId).populate('subcategories','name')

        res.status(200).json({
            success : true ,
            data : categoryDetails
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


exports.deleteCategory = catchAsyncErrors(async(req,res) => {
    try {

        await Category.findByIdAndDelete(req.params.categoryId)
        res.status(200).json({
            message : 'Başarılı şekilde kategori silindi '
        })

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

const uploadImagesToCloudinary = async (images) => {
    const uploadedImages = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image);
        return { public_id: result.public_id, url: result.secure_url };
      })
    );
    return uploadedImages;
  };

exports.updateCategory = catchAsyncErrors(async(req,res) => {
    try {
    
        const category = await Category.findById(req.params.categoryId)
    
        if (!category) {
          res.status(404).json({message : "Category bulunamadı "})
          return 
        }
    
            category.name = req.body.category || category.name 
            category.description = req.body.description || category.description
            category.isVictim = req.body.isVictim || category.isVictim
            
           // Upload new images to Cloudinary if provided
           if (req.body.images && req.body.images.length > 0) {
            const uploadedImages = await uploadImagesToCloudinary(req.body.images);
            category.images = uploadedImages;
          }
    
          await category.save()
    
        res.status(200).json({ message: "Başarılı şekilde categori güncellendi " });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})