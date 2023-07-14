var express = require('express');
const { createSubCategory, getSubCategories, getSubCategoryById, updateSubCategory, deleteSubCategory } = require('../controllers/subcategoryController');


var router = express.Router();

router.route('/subcategories/create').post(createSubCategory);
router.route('/subcategories').get(getSubCategories);
router.route('/subcategories/:id').get(getSubCategoryById);
router.route('/subcategories/:id/update').put(updateSubCategory);
router.route('/subcategories/:id/delete').delete(deleteSubCategory);







module.exports = router;