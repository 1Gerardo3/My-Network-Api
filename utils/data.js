// Array of usernames and emails
const users = [
    {
        username: 'emily-liz',
        email: 'emily@email.com'
    },
    {
        username: 'portia-uma',
        email: 'portia@email.com'
    },
    {
        username: 'barbara',
        email: 'barbara@email.com'
    },
    {
        username: 'catharine-mag',
        email: 'catharine@email.com'
    },
    {
        username: 'vonahee',
        email: 'vonahee@email.com'
    },
    {
        username: 'stefan',
        email: 'stefan@email.com'
    },
    {
        username: 'timothee',
        email: 'timothee@email.com'
    },
    {
        username: 'glenda',
        email: 'glenda@email.com'
    },
    {
        username: 'sedwig',
        email: 'sedwig@email.com'
    },
    {
        username: 'jennifer',
        email: 'jennifer@email.com'
    },
];

// Array of thoughts
const thoughts = [
    {
    thoughtText: 'Coding is the coolest hobby to have.'
    },
    {
    thoughtText: 'This morning I had coffee and a croissant for breakfast.'
    },
    {
    thoughtText: 'I am super tired. TGIF!'
    },
    {
    thoughtText: 'There is a super rare comet flying over Earth tonight!'
    },
    {
    thoughtText: 'The best place I have travelled to is Sydney, Australia.'
    },
    {
    thoughtText: 'This weekend, I am visiting the zoo with my nephew!'
    },
    {
    thoughtText: 'Only three more days until my vacation starts!'
    },
    {
    thoughtText: 'This work project is super engaging.'
    },
    {
    thoughtText: 'This work project is super boring.'
    },
    {
    thoughtText: 'I watched two movies last night!'
    }
];

// Array of reactions
const reactions = [
    {
    reactionBody: 'This is awesome!'
    },
    {
    reactionBody: 'I agree!'
    },
    {
    reactionBody: 'I disagree.'
    },
    {
    reactionBody: 'Cool!'
    },
    {
    reactionBody: 'Can you elaborate more?'
    },
    {
    reactionBody: 'Thank you for sharing your thoughts.'
    },
    {
    reactionBody: 'This is great!'
    },
    {
    reactionBody: 'I do not understand this.'
    },
    {
    reactionBody: 'So amazing!'
    },
    {
    reactionBody: 'I love it!'
    }
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
  getRandomArrItem(users).username;

// Function to generate random thoughts and reactions to add to db
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts).thoughtText,
        username: getRandomName(),
        reactions: [...getReactions(2)],
      });
    }
    return results;
};

// Create the reactions that will be added to each thought
const getReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(reactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactions).reactionBody,
        username: getRandomName(),
      });
    }
    return results;
};  

// Export users array and getRandomThoughts()
module.exports = { users, getRandomThoughts }