const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const JwtExtract = require("passport-jwt").Extract;

const User = require("../models/user");
const config = require("../config");

// setup options for jwt Strategy
const jwtOptions = {};

// Create the jwt strategy
const jwtLogin = new JwtStrategy({ jwtOptions }, (payload, done) => {});

// tell passport to use this strategy
