var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ConditionSchema   = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('Condition', ConditionSchema, 'conditions');