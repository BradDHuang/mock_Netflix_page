const express = require("express");
const router = express.Router();

const Item = require("../../models/items.json");

let getAll = (req, res) => {
    res.status(200).json({ mylist: Item.mylist, recommendations: Item.recommendations });
};

let removeItem = (req, res) => {
    let id = req.params.id;
    // find the id of the film to be removed:
    let removeId;
    for (let i = 0; i < Item.mylist.length; i++) {
        // console.log(typeof(Item.mylist[i].id));
        // console.log(typeof(id));
        if (Item.mylist[i].id == id) {
            removeId = i;
        }
    }
    Item.mylist.splice(removeId, 1);
    res.status(200).json({ mylist: Item.mylist, recommendations: Item.recommendations });
};

// GET /api/items get all items
router.get("/", getAll);

router.delete('/:id', removeItem);

module.exports = router;





