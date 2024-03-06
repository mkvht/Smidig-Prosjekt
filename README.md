# Smidig Prosjekt - Gruppe 30 


## How to run locally

1. Install [Node Package Manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install [Postgres](https://www.postgresql.org/download/)
3. Create a new [Database](https://blog.devart.com/create-database-in-postgresql.html)
4. Open a terminal in the root of the project
5. Install `db-migrate` globally
  ```sh
  npm install -g db-migrate
  ```
   
6. Create a file named `.env` in the server folder with the following content(also remove the brackets)
  ```sh
  DATABASE_URL = postgres://[postgres-username]:[postgres-password]@localhost:5432/[database-name]
  CLIENT_ID_GOOGLE = 163596508303-nvgb3aqoingekoacmdvrmj9e12nlbu39.apps.googleusercontent.com
  COOKIE_SECRET = a-very-long-random-string-here
  ```
   Example of a DATABASE_URL: 
   `DATABASE_URL = postgres://postgres:postgrespassword@localhost:5432/smidig_db`


7. Run this command in the root folder to build the project and migrate the database
  ```sh
  npm run build-local
  ```
8. Run this command in the root folder to start the server
  ```sh
  npm start
  ```
9. Go to [http://localhost:3000](http://localhost:3000) or use the link in the terminal
