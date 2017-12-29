const mongoose = require('mongoose');
var User = mongoose.model('User', {
  name: {
    type: String,
    default: null
  },
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {
  User
};
