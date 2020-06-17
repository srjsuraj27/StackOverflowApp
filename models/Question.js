const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const QuestionShema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    textone: {
        type: String,
        required: true
    },
    texttwo: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    upvotes: [
        {
            user: {
                type: ObjectId,
                ref: "User"
            }
        }
    ],
    answers: [
        {
            user: {
                type: ObjectId,
                ref: "User"
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
},
{ timestamps: true }
);

module.exports = mongoose.model("myQuestion", QuestionShema);