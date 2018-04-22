const devConfig = {
  MONGO_URL: 'mongodb://localhost/votingAppDb-dev',
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost/votingAppDb-test',
};
const prodConfig = {
  MONGO_URL: 'mongodb://localhost/votingAppDb-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

//es6 to commonjs syntax conversion
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require("babel-core").transform("code", {
  plugins: ["transform-es2015-modules-commonjs"]
});
exports.default = _extends({}, defaultConfig, envConfig(process.env.NODE_END));