const express = require('express');
const app = express();
const fs = require('fs');

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }

app.listen(3000, ()=>{
    console.log('working on port 3000')
})