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


module.exports = router;