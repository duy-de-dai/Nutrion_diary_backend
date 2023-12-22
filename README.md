# Installation

- Install Xampp , start apache, start sql
-Create database with name: nutrition_app

Inside backend and frontend folder run this command to install neccesary library:

```bash
npm install
```

# Run the app

Create a mysql database and config the database variables in `knex.js` file

Run these commands from backend folder to create table in database:

```bash
npm run migrate
npm run seed
```

Run this command in both backend and frontend folder to start the server:

```bash
npm start
```