import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("grafikbar4");
  });

export { router as grafikBar4 };
