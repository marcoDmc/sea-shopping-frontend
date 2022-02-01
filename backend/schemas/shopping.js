const mongo = require("mongoose");

const shoppingSchema = new mongo.Schema({
  _id: String,
  type: String,
  name: String,
  checked: Boolean,
  price: Number,
  tags: [String],
});

const shoppingModel = mongo.model("products", shoppingSchema);
module.exports = shoppingModel;
