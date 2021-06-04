const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.delete(':id', (req, res) => {
    //grab id to delete from params
    itemToDelete = req.params.id;
    console.log('Item to delete', itemToDelete);

    const queryText = `DELETE FROM "list" WHERE "list".id = $1;`;

    pool.query(queryText, [itemToDelete])
    .then( response => {
        console.log('Deleted item id', itemToDelete);
        res.sendStatus(200);
    }).catch(err => {
        console.log('Item not deleted', err);
        res.sendStatus(500);
    })
})

module.exports = router;