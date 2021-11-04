const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  type : string,
  regDate : Date,
}, { usePushEach: true });

module.exports = mongoose.model('test', testSchema);
