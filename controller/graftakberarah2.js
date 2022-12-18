import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("graftakberarah2");
  });

export { router as graftakberarah2 };
