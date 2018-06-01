const passport = require("passport");
const LocalStrategy = require('passport-local');
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user");
const config = require("../config");

// setup options for local Strategy
const localLoginOptions = {
  usernameField: 'email',
  passwordField: 'password'
}

/**
 * [setup for local strategy (email and password)
 * verify this username and password,
 * call done with the user if it is the correct combination
 * otherwise call done with false]
 * @type {LocalStrategy}
 */
const localLogin = new LocalStrategy(localLoginOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if(err) return done(err, false);
    if(!user) return done(null, false);

    user.comparePassword(password, (err, isMatch) => {
      if(err) return done(err, false);
      if(!isMatch) return done(null, false);
      return done(null, user);
    })
  })
});

// setup options for jwt Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.SECRET_KEY
};

/**
 * [Create the jwt strategy
 * See if the user id in the payload exists in our database
 * if it does call the done function
 * otherwise call done without the user object]
 * @type {JwtStrategy}
 */
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if(err) return done(err, false);
    user ? done(null, user) : done(null, false);
  });
});

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
