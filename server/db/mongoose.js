let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://jstarsky:LKL-7KX-3db-c7r@ds161410.mlab.com:61410/vr-edge');

module.exports = { mongoose };