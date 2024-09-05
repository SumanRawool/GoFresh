const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
const { body, validationResult } = require("express-validator");
router.delete(

  "/deleteData/:id",
  async (req, res) => {
    const id =req.params.id;
    const data = await Data.deleteOne({_id:id})
    res.json({success:true,message:"Data deleted successfully",data : data})
  }
);
module.exports = router;