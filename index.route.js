import express from "express";
import sampleRoutes from "./app/api/sample/sample.route";

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// mount sample routes at /sample
router.use("/sample", sampleRoutes);

export default router;
