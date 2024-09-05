const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
const { body, validationResult } = require("express-validator");
router.put(

  "/updateData",
  async (req, res) => {
    const {id,...rest} =req.body
     const data = await Data.updateOne({_id : id},rest)
     res.json({success:true,message:"Data updated successfully",data : data})
  }
);
module.exports = router;