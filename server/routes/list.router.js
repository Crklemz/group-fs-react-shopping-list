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

//put route
router.put('/:id', (req, res) =>{
    const itemId = req.params.id;

    const queryString =
    `UPDATE list
     Set
     "bought" = 'true',
     WHERE "item".id = $1;`; 
    
    pool.query(queryString, [itemId])
    .then( response => {
        console.log(response);
        res.sendStatus(200); // confirms on client side that info updated
    }).catch((err) => {
        console.log('error in server', err);
        res.sendStatus(500); // shows error on this server route
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