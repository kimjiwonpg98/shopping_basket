const db = require("../databases/dbconfig");

class CartStorage {
  //코드 번호
  static boardCode(code) {
    if (code === 1) return "무료나눔";
    if (code === 2) return "교재";
    if (code === 3) return "IT기기";
  }
  //장바구니 화면
  static showProduct(id) {
    return new Promise((resolve, reject) => {
      const category = [];
      const sql = `SELECT student_id, board_code_no, board_title FROM cart WHERE student_id = ?`;
      db.query(sql, [id], (err, rows) => {
        if (err) reject(err);
        for (let i = 0; i < rows.length; i++) {
          category.push(this.boardCode(rows[i].board_code_no));
        }
        resolve({ success: true, rows: rows, category: category });
      });
    });
  }
  //장바구니 담는 코드
  static getProduct(data) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO cart(student_id, board_title, board_code_no, board_no) VALUES(?, ?, ?, ?)`;
      const existCart = `SELECT board_no, student_id FROM cart WHERE board_no=? AND student_id=?`;
      const params = [
        data.student,
        data.board_title,
        data.board_code_no,
        data.board_no,
      ];
      const testParams = [data.board_no, data.student];
      db.query(existCart, testParams, (err, rows) => {
        if (err) throw err;
        if (!rows.length) {
          db.query(sql, params, (err, rows) => {
            if (err) reject({ success: false });
            resolve({ success: true });
          });
        }
        resolve({ success: false, msg: "이미 장바구니에 저장" });
      });
    });
  }
  //장바구니 있는 물건 삭제
  static removeList(data) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM cart WHERE board_no = ? AND student_id = ?`;
      const params = [data.board_no, data.student];
      db.query(sql, params, (err, rows) => {
        if (err) reject({ success: false, msg: "database에 존재하지 않는다." });
        resolve({ success: true, msg: "정상적으로 삭제" });
      });
    });
  }
}

module.exports = CartStorage;
