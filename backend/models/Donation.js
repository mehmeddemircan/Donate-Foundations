//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var donationSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    piece: {
      type: Number,
      required: function () {
        if (this.category && this.category.isVictim) {
          return true;
        }
        return false;
      },
    },
    donationAmount: {
      type: Number,
      required : true   
    },
    donationDate: {
      type: Date,
      default: Date.now,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

var Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;
