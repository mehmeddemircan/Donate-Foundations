require('dotenv').config()
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY)


exports.processDonation = catchAsyncErrors( async (req, res) => {
    const { donationAmount } = req.body;
  
    try {
      // Create a charge or payment intent using Stripe API
      const donation = await stripe.paymentIntents.create({
        amount: donationAmount * 100, // Amount in cents
        currency : "try",
        payment_method_types: ['card'],
      });
  
      // Return the client secret to complete the payment on the frontend
      res.json({ clientSecret: donation.client_secret });
    } catch (error) {
      console.error('Error processing donation:', error);
      res.status(500).json({ error: 'Error processing donation' });
    }
  });