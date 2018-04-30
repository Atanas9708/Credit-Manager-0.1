const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = config => {
  mongoose.connect(config.dbPath);

  const db = mongoose.connection;
  db.once('open', err => {
    if (err) throw err;

    console.log(`Server running on port ${config.port}..`);
  });

  require('../models/User');
  require('../models/Credit');

  db.on('error', err => {
    console.log(err);
  });
}