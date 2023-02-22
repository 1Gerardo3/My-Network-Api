const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const thoughts = getRandomThoughts(10);

    await Thought.collection.insertMany(thoughts);


    await User.collection.insertMany(users);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});