const express = require("express");
const router = express.Router();

const Item = require("../../models/items.json");

let getAll = (req, res) => {
    res.status(200).json({ mylist: Item.mylist, recommendations: Item.recommendations });
};

// GET /api/items get all items
router.get("/", getAll);

module.exports = router;





