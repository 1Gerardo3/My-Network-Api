const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },    
    email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual to retrieve length of user's friends array
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

// Initialize User model
const User = model('user', userSchema);

// Export model
module.exports = User;