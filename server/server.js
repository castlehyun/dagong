const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

db.query("select * from TEST", (err, data) => {
    if(!err) {
        res.send(data);

    } else {
        console.log(err);
        res.send(err);
    console.log(data)
    }
})

// 이후 수저엉~