import express from "express";
const router = express.Router();
router.post("/addGame", (req, res) => {
  try {
    return res.status(500).json({
      message: req.body.gameName,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});
export default router;
