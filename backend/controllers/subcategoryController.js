const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");

// Create a new subcategory
exports.createSubCategory = async (req, res) => {
    try {
      const { name, categoryId } = req.body;
  
      // Check if the category exists
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      const subcategory = new SubCategory({ name, category: categoryId });
      await subcategory.save();
  
      category.subcategories.push(subcategory._id);
      await category.save();
  
      res.status(201).json({ subcategory });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Get all subcategories
  exports.getSubCategories = async (req, res) => {
    try {
      const subcategories = await SubCategory.find();
      res.status(200).json({ subcategories });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Get a single subcategory by ID
  exports.getSubCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const subcategory = await SubCategory.findById(id);
      if (!subcategory) {
        return res.status(404).json({ error: 'Subcategory not found' });
      }
  
      res.status(200).json({ subcategory });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Update a subcategory
  exports.updateSubCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, categoryId } = req.body;
  
      // Check if the category exists
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      const subcategory = await SubCategory.findById(id);
      if (!subcategory) {
        return res.status(404).json({ error: 'Subcategory not found' });
      }
  
      subcategory.name = name;
      subcategory.category = categoryId;
      await subcategory.save();
  
      res.status(200).json({ subcategory });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Delete a subcategory
  exports.deleteSubCategory = async (req, res) => {
    try {
      const { id } = req.params;
  
      const subcategory = await SubCategory.findById(id);
      if (!subcategory) {
        return res.status(404).json({ error: 'Subcategory not found' });
      }
  
      const categoryId = subcategory.category;
      await subcategory.remove();
  
      const category = await Category.findById(categoryId);
      category.subcategories.pull(id);
      await category.save();
  
      res.status(200).json({ message: 'Subcategory deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };