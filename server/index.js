//const path = require('path');
const env = process.env.NOVE_ENV || 'development';
const config = require('./config/config')[env];
//require('./config/database')(config);
const app = require('express')();
require('./config/express')(app);
require('./config/routes')(app);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/dist/index.html'));
// });

app.listen(config.port); 

console.log(`Server running on port ${config.port}..`);