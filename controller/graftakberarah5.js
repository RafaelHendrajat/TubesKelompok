import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("graftakberarah5");
  });

export { router as graftakberarah5 };
