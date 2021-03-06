var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-demo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-demo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-demo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-demo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-demo'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-demo-production'
  }
};

module.exports = config[env];
