'use strict';
let connectionStrings = {
    production: process.env.CONNECTION_STRING,
    development: 'mongodb://localhost/striveforsuccess-db'
};

module.exports = {
    environment: process.env.NODE_ENV || 'development',
    connectionString: connectionStrings[process.env.NODE_ENV || 'development'],
    port: process.env.PORT || 3003,
    sessionSecret: process.env.SESSION_SECRET || '[session_secret]'
};
