//const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const userData = require('./../../data/users');

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const inputUser = {
    email: email.trim(),
    password: password.trim()
  };

  console.log(email);
  let savedUser = userData.findByEmail(email);
  console.log(savedUser);

  if (!savedUser) {
    const error = new Error('Incorrect email');
    error.message = 'Incorrect email';
    return done(error);
  }

  const isMatch = savedUser.repeatPass === inputUser.password

  if (!isMatch) {
    const error = new Error('Incorrect password');
    error.message = 'Incorrect password';
    return done(error);
  }

  const payload = {
    sub: savedUser.id
  };

  const token = jwt.sign(payload, 's0m3, r@nd0m str!ng');
  const data = {
    username: savedUser.username,
    userId: savedUser.id
  };

  return done(null, token, data);

  // User.findOne({ username: inputUser.username })
  //   .then(user => {
  //     let error = {};

  //     if (!user) {
  //       error['message'] = 'Incorrect username!';
  //       return done(error);
  //     }

  //     if (!user.authenticate(inputUser.password)) {
  //       error['message'] = 'Incorrect password!';
  //       return done(error);
  //     }

  //     const payload = {
  //       sub: user._id
  //     };

  //     const token = jwt.sign(payload, 's0m3, r@nd0m str!ng');
  //     const data = {
  //       username: user.username,
  //       userId: user._id
  //     };
  //     return done(null, token, data);
  //   })
  //   .catch(err => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //   })
});