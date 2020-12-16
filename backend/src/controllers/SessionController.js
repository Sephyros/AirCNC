const User = require("../models/User");
const sanitize = require("mongo-sanitize");

module.exports = {
  async store(req, res) {
    const { email } = sanitize(req.body);

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  },
};
