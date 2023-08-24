const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    votesInFavor: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    votesAgainst: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    status: {
        type: String,
        enum: ['Open', 'Closed'],
        default: 'Open'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Poll', pollSchema);
