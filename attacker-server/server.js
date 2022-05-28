const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const getLogTime = () => {
  const dateObject = new Date();
  const date = (`0${dateObject.getDate()}`).slice(-2);
  const month = (`0${dateObject.getMonth() + 1}`).slice(-2);
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();
  return (`${year}-${month}-${date} ${hours}:${minutes}:${seconds}: `);
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cookies', (req, res) => {
  try {
    const data = `${getLogTime() + req.query.cookies}\n`;
    fs.appendFileSync('cookies.log', data);
  } catch (err) {
    console.log(err);
  }
  res.sendStatus(200);
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Server running on ${port}`);
});
