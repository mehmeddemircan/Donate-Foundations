//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required : true 
    },
    description : {
        type : String,

    } ,
    subcategories : [
        {
            type : ObjectId,
            ref : 'SubCategory'
        }
    ],
    isVictim : {
        type : Boolean,
        default : false 
    },
    images : [
        {
            public_id : {
                type : String,
                required : true ,
            },
            url : {
                type : String,
                required: true 
            }
            
        }
    ]
   
},{timestamps : true });

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;