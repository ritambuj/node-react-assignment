const express = require('express')
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const app = express();

var cors = require('cors');
const { json } = require('express');

app.use(cors()) /

fs.createReadStream('data.csv')
.pipe(csv({}))
.on('data', (data) => results.push(data))
.on('end', () => {

    var resultsNew = JSON.stringify(results)
    console.log(resultsNew)
    console.log(results)
});

app.get('/', (req, res) => {
    res.send(results);
});

app.listen(3001, () => console.log('Listning on port 3001;'));