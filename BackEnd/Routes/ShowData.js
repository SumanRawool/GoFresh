const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
const { body, validationResult } = require("express-validator");
router.get(

  "/getData",
  async (req, res) => {
    const data = await Data.find({})
    res.json({success:true,data:data})
  }
);
module.exports = router;