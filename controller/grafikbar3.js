import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("grafikbar3");
  });

export { router as grafikBar3 };
