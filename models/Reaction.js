const { Schema, Types } = require('mongoose');

// Create Reaction schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return new Date(date).toLocaleDateString()
            }
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Export schema
module.exports = reactionSchema;