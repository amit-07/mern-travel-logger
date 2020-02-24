const mongoose = require('mongoose');

const requiredString = {type: String, required: true};
const requiredNumber = {type: Number, required: true};


const logEntrySchema = new mongoose.Schema({
    title: requiredString,
    description: String,
    comments: String,
    rating:{
        type: Number,
        min: 0,
        max: 10,
        default:0
    },
    image: String,
    latitude: {...requiredNumber,min:-90,max:90},
    longitude: {...requiredNumber,min:-180,max:180},
    visitDate: {required: true, type: Date}
},
{
    timeStamps: {createdAt: 'created_at', updatedAt: 'updated_at'},
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;