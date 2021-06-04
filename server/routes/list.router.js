const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

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


module.exports = router;