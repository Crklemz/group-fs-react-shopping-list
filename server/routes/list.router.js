const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...




//Get route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM list`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

//post route
router.post('/', (req, res) => {
    const listItem = req.body;
    const sqlText = `INSERT INTO list (item, quantity, unit)
                    VALUES ($1, $2, $3)`;

    pool.query(sqlText, [listItem.item, listItem.quantity, listItem.unit])
    .then((result) => {
        console.log('added listItem to the database. list item is -->', listItem );
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`error making database query ${sqlText} in POST`, error);
        res.sendStatus(500);
    })
})


//delete route
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