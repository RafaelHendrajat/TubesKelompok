import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("grafikbar5");
  });

export { router as grafikBar5 };
