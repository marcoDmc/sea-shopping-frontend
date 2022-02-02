const mongo = require("mongoose");

const shoppingSchema = new mongo.Schema({
  type: String,
  name: String,
  checked: Boolean,
  price: Number,
  tags: [String],
});

const shoppingModel = mongo.model("products", shoppingSchema);
module.exports = shoppingModel;
