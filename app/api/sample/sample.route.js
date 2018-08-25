import express from "express";
import validate from "express-validation";
import validations from "./sample.validator";
import sampleCtrl from "./sample.controller";

const router = express.Router(); // eslint-disable-line new-cap

/** GET /api/sample/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route("/random-number").get(sampleCtrl.getRandomNumber);

export default router;
