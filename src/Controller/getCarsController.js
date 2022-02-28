/** @format */
const db = require("../database/database");

const getCarsController = async (req, res, next) => {
  const sql =
    "SELECT * FROM warehouses INNER JOIN cars on cars.name = warehouses.name";
  const params = [];
  db.all(sql, params, (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      res.status(400).json({ message: err.message });
    }
  });
};

module.exports = getCarsController;
