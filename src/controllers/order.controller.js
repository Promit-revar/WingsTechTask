const {
  getOrders,
  createOrder,
  deleteOrder,
} = require("../services/orders.service");
const HTTPError = require("../utils/errors/http.error");
const NotFoundError = require("../utils/errors/resource.not.found.error");

exports.listOrders = async (req, res) => {
  try {
    const result = await getOrders(req.query);
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
exports.createOrder = async (req, res) => {
  try {
    const result = await createOrder(req.body);
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
exports.deleteOrder = async (req, res) => {
  try {
    const result = await deleteOrder(req.params.id);
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
