var morgan = require('morgan');
var bp = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

//convert es6 to commonjs
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("babel-core").transform("code", {
  plugins: ["transform-es2015-modules-commonjs"]
});

exports.default = function (app) {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(bp.json());
  app.use(bp.urlencoded({ extended: true }));

  if (isDev) {
    app.use(morgan('dev'));
  }
};