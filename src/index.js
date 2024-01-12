const express = require('express');
const PORT = 3001;
const UserRouter = require('./routes/UserRoute')
const FoodRouter = require('./routes/FoodRoute')
const MealRouter = require('./routes/MealRoute')
const DayRouter = require('./routes/DayRoute')
const GoalRouter = require('./routes/GoalRoute')
const ExcerciseRouter = require('./routes/ExcerciseRoute')


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
app.use('/food', FoodRouter);
app.use('/meal', MealRouter);
app.use('/day', DayRouter);
app.use('/goal', GoalRouter);
app.use('/excercise', ExcerciseRouter);

app.listen(PORT, () => {
  console.log(`App listenning at http://localhost:${PORT}`);
});