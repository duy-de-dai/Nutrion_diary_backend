const express = require('express');
const PORT = 3001;
const UserRouter = require('./routes/UserRoute')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send("hello")
});
app.use('/user', UserRouter);

app.listen(PORT, () => {
  console.log(`App listenning at http://localhost:${PORT}`);
});