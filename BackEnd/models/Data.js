const mongoose = require("mongoose");

const { Schema } = mongoose;

const DataSchema = new Schema({
    CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},{ versionKey: false });

module.exports = mongoose.model("food_items", DataSchema);
// category: "",
//         name: "",
//         image: "",
//         price: "",
//         description: "",

// CategoryName
// "Vegetables"
// name
// "Broccoli"
// img
// "https://i.pinimg.com/736x/ac/c9/b1/acc9b18835f34f62fd9d507fe93c760b.jp…"
// price
// "260"
// description
// "Our broccoli is cultivated using organic farming practices that avoid …"