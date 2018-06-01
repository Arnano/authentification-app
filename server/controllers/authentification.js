const User = require("../models/user");

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser) return res.status(422).send("Email in use");

    const user = new User({ email, password });
    user.save(err => {
      if (err) return next(err);
      res.json({ success: true });
    });
  });
};
