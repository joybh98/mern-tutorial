// schema for user model

const { Schema } = require("mongoose");

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
  }, {
    timestamps: true,
});

// compile the model
const User = mongoose.model('User',userSchema)

module.exports = User;