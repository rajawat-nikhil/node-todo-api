const mongoose = require('mongoose');

const Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
