// seed_users.js

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'duymv',
          email: 'maivuduy2k2@.com',
          password: '123456', // Hashed password, not plain text
          name: 'duy',
          age: 25,
          gender: 1, // Assuming 1 for male, 2 for female, etc.
          weight: 70.5,
          height: 175.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          refreshToken: null, // Or provide a default value
        },
        // Add more seed data as needed
      ]);
    });
};
