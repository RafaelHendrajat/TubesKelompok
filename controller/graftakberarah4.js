import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("graftakberarah4");
  });

export { router as graftakberarah4 };
