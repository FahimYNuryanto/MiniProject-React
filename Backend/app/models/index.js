const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require('./admins.model');
db.role = require('./role.model');
db.ROLES = ["admin"]
module.exports = db;