import ProductSchema from "../../schema/productSchema";

const Product = ProductSchema;

//Get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.json({ data: products });
  } catch (e) {
    next(e);
  }
};

// //Get user only products
// export const getUserProducts = async (req, res, next) => {
//   try {
//     const query = Product.where({ seller: req.body.seller });
//     const products = await query.find();

//     res.json({ data: products });
//   } catch (e) {
//     next(e);
//   }
// };

//Get one product
export const getProduct = async (req, res, next) => {
  try {
    const query = Product.where({ _id: req.body.id });
    const product = await query.findOne();

    res.json({ data: product });
  } catch (e) {
    next(e);
  }
};
