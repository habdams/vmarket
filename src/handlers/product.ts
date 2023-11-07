import ProductSchema from "../../schema/productSchema";

const Product = ProductSchema;

//Create product
export const createProduct = async (req, res, next) => {
  const newProductInfo = req.body;
  console.log(newProductInfo);
  try {
    const product = new Product(newProductInfo);
    const newProduct = await product.save();

    res.send({ data: newProduct });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
    next(e);
  }
};

//Update product
export const updateProduct = async (req, res, next) => {
  try {
    const filter = { _id: req.body._id, seller: req.body.seller };
    const update = req.body;
    const updated = await Product.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.send({ data: updated });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
    next(e);
  }
};

//Delete product
export const deleteProduct = async (req, res, next) => {
  try {
    const filter = { _id: req.params.id, seller: req.body.seller };
    const deleted = await Product.findOneAndDelete(filter);

    res.json({ data: deleted });
  } catch (e) {
    next(e);
  }
};
