`use strict`;

const db = require("../databases/dbConfig");

function boardCode(code) {
  if (code === 1) return "무료나눔";
  if (code === 2) return "교재";
  if (code === 3) return "IT기기";
}

const output = {
  showCart: (req, res, next) => {
    const productType = [];
    const idx = req.params.id;
    const sql = `SELECT student_id, board_code_no, board_title FROM cart WHERE student_id = ?`;
    db.query(sql, [idx], (err, rows) => {
      if (err) throw err;

      for (let i = 0; i < rows.length; i++) {
        productType.push(boardCode(rows[i].board_code_no));
      }
      res.render("./showCart.ejs", {
        rows: rows,
        productType: productType,
      });
    });
  },

  insertProduct: (req, res) => res.render("./insertProduct.ejs"),
};

const process = {
  insertProduct: (req, res, next) => {
    const data = req.body;
    const sql = `INSERT INTO cart(student_id, board_title, board_code_no) VALUES(?, ?,?)`;
    const params = [data.student, data.board_title, data.board_code_no];
    db.query(sql, params, (err, rows) => {
      if (err) throw err;
    });
  },

  deleteProduct: (req, res, next) => {
    const data = req.body;
    const sql = `DELETE FROM cart WHERE board_no = ?`;
    db.query(sql, [data.board_no], (err, rows) => {
      if (err) throw err;
    });
  },
};

module.exports = { output, process };
