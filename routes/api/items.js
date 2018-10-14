const express = require("express");
const router = express.Router();

const Item = require("../../models/items.json");

let mylist = Item.mylist, recommendations = Item.recommendations;
let getAll = (req, res) => {
    res.status(200).json({ mylist, recommendations });
};

let removeItem = (req, res) => {
    let id = req.params.id;
    // find the id of the film to be removed:
    let removeId;
    for (let i = 0; i < mylist.length; i++) {
        // console.log(typeof(mylist[i].id));
        // console.log(typeof(id));
        if (mylist[i].id == id) {
            removeId = i;
        }
    }
    mylist = [
                    ...mylist.slice(0, removeId),
                    ...mylist.slice(removeId + 1)
                  ];
    res.status(200).json({ mylist, recommendations });
};

let addItem = (req, res) => {
    let id = req.params.id;
    // find the id of the film to be added:
    let addId;
    for (let i = 0; i < recommendations.length; i++) {
        if (recommendations[i].id == id) {
            addId = i;
        }
    }
    mylist = [ ...mylist, recommendations[addId] ];
    recommendations = [ 
                             ...recommendations.slice(0, addId),
                             ...recommendations.slice(addId + 1)
                           ];
    res.status(200).json({ mylist, recommendations });
};

// GET /api/items get all items
router.get("/", getAll);

router.delete('/:id', removeItem);

router.put('/:id', addItem);

module.exports = router;





