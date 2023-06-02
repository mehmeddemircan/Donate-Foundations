var express = require('express');
const { getAllCategoryOnlyName, createCategory, updateCategory, deleteCategory, getAllCategory, getCategoryDetails } = require('../controllers/categoryController');

var router = express.Router();

router.route('/categories/name').get(getAllCategoryOnlyName)
router.route('/categories').get(getAllCategory)
router.route('/categories/:categoryId/details').get(getCategoryDetails)
router.route('/create-category').post(createCategory)
router.route('/categories/:categoryId/update').put(updateCategory)
router.route('/categories/:categoryId/delete').delete(deleteCategory)

module.exports = router;