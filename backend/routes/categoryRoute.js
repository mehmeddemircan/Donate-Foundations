var express = require('express');
const { getAllCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

var router = express.Router();

router.route('/categories').get(getAllCategory)
router.route('/create-category').post(createCategory)
router.route('/categories/:categoryId/update').put(updateCategory)
router.route('/categories/:categoryId/delete').delete(deleteCategory)

module.exports = router;