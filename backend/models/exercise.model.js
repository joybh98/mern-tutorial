const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/user');

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

app.use('/exercises',exercisesRouter);
app.user('/users',userRouter);


module.exports = Exercise;