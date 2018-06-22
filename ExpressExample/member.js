var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var memberSchema   = new Schema({
    id: String
});

module.exports = mongoose.model('Member', memberSchema);
