import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("graftakberarah3");
  });

export { router as graftakberarah3 };
