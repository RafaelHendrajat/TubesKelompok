import express from "express";
import { db } from "./database.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pencarian5");
});

router.post("/hitungJumlah", async (req, res) => {
  
  const queryString =
    `SELECT count(target) as jumlah FROM book5 WHERE source LIKE ? AND book = '?'`;
  const name = "%"+req.body.name+"%";
  const book = req.body.book;
  const query = (conn, queryString, [name,book]) => {
    return new Promise((resolve, reject) => {
      conn.query(queryString, [name,book], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  const conn = await db();
  const result = await query(conn, queryString, [name,book]);
  conn.release();
  res.json(result);

});

router.post("/cariNama", async (req, res) => {
  const queryString =
  "SELECT source, target, weight FROM book5 WHERE source LIKE ? AND book = '?' ORDER BY source LIMIT ?,?";
  const name = "%"+req.body.name+"%";
  const book = req.body.book;
  const start = req.body.start*10;
  const banyak = 10;
  const query = (conn, queryString, [name, book,start, banyak]) => {
    return new Promise((resolve, reject) => {
      conn.query(queryString, [name, book, start,banyak],(err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  const conn = await db();
  const result = await query(conn, queryString, [name, book,start,banyak]);
  conn.release();

  res.send(result);
});

export { router as pencarian5 };
