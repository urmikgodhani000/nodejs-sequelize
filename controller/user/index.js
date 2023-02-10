const express = require("express");
const { registar, updateDetail, delteteData } = require("./controller");
const router = express.Router();

router.post("/", registar);
router.post("/:id", updateDetail);
router.delete("/:id", delteteData);

module.exports = router;
