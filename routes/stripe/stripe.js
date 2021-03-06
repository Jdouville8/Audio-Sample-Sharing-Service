const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require("multer");
const Grid = require("gridfs-stream");
const GridFsStorage = require("multer-gridfs-storage");
const db = mongoose.connection;
const User = require("../../models/User");
const PackInfo = require("../../models/PackInfo");
const crypto = require("crypto");
const path = require("path");
const cors = require("cors");
// needed for local payment testing, dotenv dev dependency also needed
// require('dotenv').config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);

const calculateOrderAmount = () => {
  return 3000;
};

router.post("/create-payment-intent", cors(), async (req, res) => {
  console.log("payment being made!!");

  const { items, id } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    description: "BackLeft Lesson",
    payment_method: id,
    confirm: true,
  });
  res.send({
    message: "Payment Successful",
    success: true,
  });
});

router.post("/create-payment-intent", cors(), async (req, res) => {
  console.log("payment being made!!");

  const { items, id } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    description: "BackLeft Lesson",
    payment_method: id,
    confirm: true,
  });
  res.send({
    message: "Payment Successful",
    success: true,
  });
});

module.exports = router;
