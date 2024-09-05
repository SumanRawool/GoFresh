const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const jwtsecret = "mynameisganeshiamfrompune";

router.post(



    
    // "/addData",
    // async (req, res) => {
    //     try {
    //               await Data.create({
    //                 CategoryName: "Vegetables",
    //                 name: "Suman",
    //                 img: "jlksdjfkjlksdjfjsdjfsdfdsf",
    //                 price: "200",
    //                 description: "reqbodydescription"
    //               });
    //               res.json({ success: true });
    //               console.log("Hello");
    //             } catch (error) {
    //               console.log(error);
    //               res.json({ success: false });
    //             }
    // }



    // Final Function
  "/addData",
  [
    body("CategoryName").isLength({ min: 4 }),
    body("name").isLength({ min: 4 }),
    body("img").isLength({ min: 4 }),
    body("price").isLength({ min: 3 }),
    body("description").isLength({ min: 4 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const salt = await bcrypt.genSalt(10);
    // let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await Data.create({
        CategoryName: req.body.CategoryName,
        name: req.body.name,
        img: req.body.img,
        price: req.body.price,
        description: req.body.description,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
