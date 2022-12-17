import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("graftakberarah");
  });

export { router as graftakberarah };
