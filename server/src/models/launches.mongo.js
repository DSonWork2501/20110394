const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        type: Date,
        require: true
    },
    mission: {
        type: String,
        require: true
    },
    rocket: {
        type: String,
        require: true
    },
    target: {
        type: String,
    },
    customer: [String],
    upcoming: {
        type: Boolean,
        require: true
    },
    success: {
        type: Boolean,
        require: true,
        default: true
    },
});

//Export the model
module.exports = mongoose.model('Launch', launchesSchema);