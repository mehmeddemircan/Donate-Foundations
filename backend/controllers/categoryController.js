const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/Category");


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

exports.getAllCategory = catchAsyncErrors(async(req,res) => {
    try {
        const categories = await Category.find()
        res.status(200).json({
            data : categories
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

exports.updateCategory = catchAsyncErrors(async(req,res) => {
    try {
        
      const updatedCategory =   await Category.findByIdAndUpdate(req.params.categoryId,{$set : req.body},{new : true })
        res.status(200).json({
            success : true ,
            data : updatedCategory,
            message : 'Başarılı şekilde güncellendi '
        })
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})