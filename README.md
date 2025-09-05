# z-prefix-crud
This application will allow an inventory manager to add, delete, modify, and view all items in their respective inventory. It will also allow all inventory managers and guests to view every item currently managed by the inventory system. Users will also be able to view the individual item details.

- API Address: http://127.0.0.0:5050
- WebApp Address: http://127.0.0.0:5173

## Installation
#### Requirements
- Docker installed

#### Steps
1. Copy all the files from the repository with git clone into your desired directory.
2. In a terminal, navigate to the directory you cloned the repo into.
3. Run `docker compose up -d`
4. Success!!!

## Notes
- You must access the web app from address 127.0.0.0 and not local host! The API has been designed to accept only traffic from 127.0.0.0.
- A JSON Web Token (JWT) is issued to you when you log in. This token is required to access most of the API's endpoints.
- If you refresh the page for whatever reason, your session is no longer valid even if you still have a valid JWT. You must log in again in order to continue access the site.
- The database should be automatically seeded with four user accounts and 150 randomized items.
- The .env file is included in this repo containing the password and connection information for the PostgreSQL database.
- The passwords for the four users are in plain text in the seed files if you are interested in loggin in with those accounts.
- The WebApp does feature both light and dark mode themes. These themes are set by your browser preferences.

## API Endpoints
The following are the endpoints for the API. A JWT with a matching valid username is required for some endpoints; these will be marked with JWT.

- `/` -- Lets you know if the API is up.
- `/login` -- Allows a registered user to log into the site.
- `/items` -- Allows a guest or registered user to view all items in inventory.
- `/users` -- Allows a guest to register for an account.
- `/users/:account` -- JWT - Retrieves information about a user.
- `/users/:account/items` -- JWT - Adds, deletes, modifies, and retrieves items in the user's inventory.

## WebApp Paths
The following are all of the paths that are available to a user navigating the web app. A JWT with a matching valid username is required for some paths; these will be marked with JWT.

- `/` -- The home path. It shows the guest or registered user all items in inventory.
- `/item` -- Allows a guest or registered user to the view the details of a given item, but not modify or delete it.
- `/login` -- Allows a registered user to log into their account.
- `/create-account` -- Allows a guest to register for an account.
- `/inventory` -- JWT - Allows a registered user to view their inventory and view individual items.
- `/inventory/item` -- JWT - Allows a registered user to view, edit, or delete an individual item.
- `/inventory/add-item` -- JWT - Allows a registered user to add an item to their inventory.

## Technologies Used
Note: Development dependencies/technologies are not listed - see the various package.json files for all dependencies used.
#### WebApp
- React, Vite, Vanilla JS, React Router DOM, Docker, Git
#### API
- Express, BCrypt, Cookie-Parser, CORS, Dotenv, Jose, KNEX, Nodemon, PG, Faker, Docker, Git
#### Database
- PostgreSQL
#### Container System
- Docker

## Final Note
This project is not intended for any commercial use. It was produced within a 72 Hour window to validate my ability to create a full stack application. Thanks!
