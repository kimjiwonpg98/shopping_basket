`use strict`;

const Cart = require("../models/Cart");

const output = {
  showCart: async (req, res, next) => {
    const student = new Cart(req.params.id);
    const response = await student.shoppingBasket();
    return res.json(response);
  },
  insertProduct: (req, res) => res.render("./insertProduct.ejs"),
};

const process = {
  insertProduct: async (req, res, next) => {
    const addcart = new Cart(req.body);
    const response = await addcart.product();
    return res.json(response);
  },

  deleteProduct: async (req, res, next) => {
    const remove = new Cart(req.body);
    const response = await remove.productList();
    return res.json(response);
  },
};

module.exports = { output, process };
