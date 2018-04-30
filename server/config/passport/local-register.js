//const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
//const encryption = require('../../util/encryption');
const jwt = require('jsonwebtoken');
const userData = require('./../../data/users');

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  // const salt = encryption.generateSalt();
  // const hashedPass = encryption.generateHashedPassword(salt, password).trim();
  const user = {
    username: username.trim(),
    email: req.body.email.trim(),
    repeatPass: req.body.repeatPass.trim(),
  };

  const existingUser = userData.findByEmail(req.body.email.trim());

  if (existingUser) {
    return done('E-mail already exists!')
  }

  userData.save(user);

  const savedUser = userData.findByEmail(req.body.email.trim());

  const payload = {
    sub: savedUser.id
  };

  const token = jwt.sign(payload, 's0m3 r@nd0m str!ng');
  const data = {
    username: savedUser.username,
    userId: savedUser.id
  };

  console.log(data);

  return done(null, token, data);

  // User.create(user)
  //   .then(res => {
  //     const payload = {
  //       sub: res._id
  //     };

  //     const token = jwt.sign(payload, 's0m3 r@nd0m str!ng');
  //     const data = {
  //       username: res.username,
  //       userId: res._id
  //     };

  //     return done(null, token, data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     if (err['message'].includes('username')) {
  //       return done('Username already exists!');
  //     } else if (err['message'].includes('email')) {
  //       return done('Email already exists!');
  //     }
  //   })

})