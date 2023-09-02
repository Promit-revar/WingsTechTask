const express = require("express");
const {
  validateUser,
  validateAdmin,
} = require("../middlewares/auth.validation");
const {
  loginValidation,
  registerValidation,
  createProductValidation,
  validateId,
  createDiscountRuleValidation,
  requestQueryValidationTax,
  createTaxRuleValidation,
  createOrderValidation,
} = require("../middlewares/request.validator");
const {
  createProduct,
  getSingleProduct,
  listProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const {
  createDiscountRule,
  getSingleDiscountRule,
  listDiscountRules,
  updateDiscountRule,
  deleteDiscountRule,
  removeDiscountFromProduct,
} = require("../controllers/discount.rules.controller");
const {
  listOrders,
  createOrder,
  deleteOrder,
} = require("../controllers/order.controller");
const {
  listTaxRules,
  createTaxRule,
  updateTaxRule,
  deleteTaxRule,
} = require("../controllers/tax.controller");
const { login, register } = require("../controllers/auth.controller");
const router = express();
router.use(express.json());
router.get("/", (req, res) => {
  res.send("Hello World");
});

//auth routes...
router.post("/login", loginValidation, login);
router.post("/register", registerValidation, register);

//product routes ...
router.get("/products", validateUser, listProducts);
router.get("/products/:id", validateUser, validateId, getSingleProduct);
router.patch("/products/update/:id", validateAdmin, validateId, updateProduct);
router.delete("/products/delete/:id", validateAdmin, validateId, deleteProduct);
router.post(
  "/products/create",
  validateAdmin,
  createProductValidation,
  createProduct
);

//discount routes ...
router.get("/discount-rules", validateAdmin, listDiscountRules);
router.get(
  "/discount-rules/:id",
  validateUser,
  validateId,
  getSingleDiscountRule
);
router.patch(
  "/discount-rules/update/:id",
  validateAdmin,
  validateId,
  updateDiscountRule
);
router.delete(
  "/discount-rules/delete/:id",
  validateAdmin,
  validateId,
  deleteDiscountRule
);
router.post(
  "/discount-rules/create",
  validateAdmin,
  createDiscountRuleValidation,
  createDiscountRule
);
router.delete(
  "/discount-rules/:productId/:id",
  validateAdmin,
  validateId,
  removeDiscountFromProduct
);

//tax routes ...
router.get(
  "/tax-rules",
  validateAdmin,
  requestQueryValidationTax,
  listTaxRules
);
router.post(
  "/tax-rules/create",
  validateAdmin,
  createTaxRuleValidation,
  createTaxRule
);
router.patch("/tax-rules/update", validateAdmin, updateTaxRule);
router.delete("/tax-rules/delete/:id", validateAdmin, validateId, deleteTaxRule);

//order routes ...
router.get("/orders", validateUser, listOrders);
router.post("/orders/create", validateUser, createOrderValidation, createOrder);
router.delete("/orders/delete/:id", validateAdmin, validateId, deleteOrder);

module.exports = router;
