var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');

var TaskSchema = new mongoose.Schema({
    title:{type: String},
    description:{type: String},
    completed:{type:Boolean, default:false}
    },{timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);