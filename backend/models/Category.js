//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required : true 
    },
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