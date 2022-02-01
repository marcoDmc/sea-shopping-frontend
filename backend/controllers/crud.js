const shoppingSchema = require("../schemas/shopping");
const { v4: uuid } = require("uuid");
const controls = {
  async index(request, response) {
    try {
      const getProducts = await shoppingSchema.find();
      return response.status(200).json(getProducts);
    } catch (error) {
      return response
        .status(400)
        .json({ message: "error , could not find the products" });
    }
  },
  async create(request, response) {
    const { _id, type, name, checked, price, tags } = request.body;
    try {
      if (!type || !name || !checked || !price || !tags) {
        return response
          .status(400)
          .json({ message: "error , something is missing" });
      }

      const createProduct = await shoppingSchema.create({
        _id: uuid(),
        type,
        name,
        checked,
        price,
        tags,
      });
      return response.status(200).json(createProduct);
    } catch (error) {
      return response
        .status(400)
        .json({ message: "error , could not create a new product" });
    }
  },
  async update(request, response) {},
  async delete(request, response) {},
};

module.exports = controls;
