const router = require('express').Router();
const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const db = mongoose.connection;
const User = require('../../models/User');
const PackInfo = require('../../models/PackInfo');
const crypto = require('crypto');
const path = require('path');
const stripe = require('stripe')("sk_test_51IbyXTGpEScSSzwXa4BjlezpCAlmkLuqvKClrD0WWGJGcbyb11Xb5FonGapu5upg2xuJ68JcEpil8MRCYj4CoA6500MKKmKCLu")


const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 3000;
  };
  
router.post("/create-payment-intent", async (req, res) => {
    console.log('payment being made!!')
    

    const { items, id } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      description: 'BackLeft Lesson',
      payment_method: id,
      confirm: true
    });
    res.send({
    message: 'Payment Successful',
      success: true
    });
  });



module.exports = router;
