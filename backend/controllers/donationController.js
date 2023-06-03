const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Donation = require("../models/Donation");


exports.createDonation = catchAsyncErrors(async(req,res) => {
    try {

        const newDonation = new Donation(req.body)
        const savedDonation  = await newDonation.save()
        res.status(200).json({
            success : true ,
            data : savedDonation ,
            message : 'Başarılı Şekilde bağışınız oluşturuldu ödeme yaparak gercekleştiriniz'
        })
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})