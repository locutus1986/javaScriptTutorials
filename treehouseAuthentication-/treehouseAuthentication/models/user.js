const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      UserSchema = new mongoose.Schema({
        email: {
          type: String,
          unique: true,
          requried: true,
          trim: true
        },
        name: {
          type: String,
          required: true,
          trim: true
        },
        favoriteBook: {
          type: String,
          requried: true,
          trim: true
        },
        password: {
          type: String,
          required: true
        }
      });

//hash password before saving to database
//mongoose does not support es6 syntax.

UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if(err){
      return next(err);
    }
    user.password = hash;
    next();
  })
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
