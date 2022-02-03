const shoppingSchema = require("../schemas/shopping");

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
    const { type, name, checked, price, tags } = request.body;
    if (!name || !price || !tags) {
      return response
        .status(400)
        .json({ message: "error, something is missing" });
    }

    try {
      const newProduct = await shoppingSchema.create({
        type,
        name,
        checked,
        price,
        tags,
      });

      return response.status(200).json(newProduct);
    } catch (error) {
      return response
        .status(400)
        .json({ message: "error , could not create a new item" });
    }
  },
  async delete(request, response) {
    const { _id } = request.params;
    try {
      const deleteProduct = await shoppingSchema.findByIdAndDelete(_id);
      return response.status(200).json(deleteProduct);
    } catch (error) {
      return response
        .status(400)
        .json({ message: "error , could not delete item" });
    }
  },
  async update(request, response) {
    const { _id } = request.params;

    try {
      const updateProduct = await shoppingSchema.findOne({ _id: _id });
      if (updateProduct.checked) {
        updateProduct.checked = false;
      } else {
        updateProduct.checked = true;
      }

      await updateProduct.save();

      return response.status(200).json(updateProduct);
    } catch (error) {
      return response
        .status(400)
        .json({ message: "error , could not edit item" });
    }
  },
  async edit(request, response) {
    const { _id } = request.params;
    const { name, tags, price } = request.body;

    try {
      if (name || tags || price) {
        const editProduct = await shoppingSchema.findOne({ _id: _id });
        editProduct.name = name;
        editProduct.tags = tags;
        editProduct.price = price;
        await editProduct.save();
        return response.status(200).json(editProduct);
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "error , could not edit the item" });
    }
  },
};

module.exports = controls;
