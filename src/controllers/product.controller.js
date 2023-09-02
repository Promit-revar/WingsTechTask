const {
  getProducts,
  getSingleProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../services/product.service");
const HTTPError = require("../utils/errors/http.error");
const NotFoundError = require("../utils/errors/resource.not.found.error");

exports.listProducts = async (req, res) => {
  try {
    const result = await getProducts();
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const result = await getSingleProduct(req.params.id);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const result = await addProduct(req.body);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const result = await updateProduct(req.body, req.params.id);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
