const users = require('../services/userService');

module.exports = {
  getUsers: function(req, res) {
    console.log(users.getAll());
    return res.json({ users: users.getAll() });
  }
};
