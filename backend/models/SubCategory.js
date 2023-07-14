//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
var subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required : true 
    },
    category : {
        type : ObjectId,
        ref : 'Category',
        
    }
   
},{timestamps : true });

var SubCategory = mongoose.model('SubCategory', subcategorySchema);
module.exports = SubCategory;