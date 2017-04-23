## Installation

Global Dependencies:

 - locally running postgres database (v9.5+)
 - node and npm installed

Installation:

- fill out .env.example with real keys and rename to .env
- npm install
- npm run initialize
- npm run seed if you wish to use the sample seeded db entries

## Running

npm run start_api to start the api server
npm run start_app to run the sample express app

navigate to localhost:3000

Manually rebuilding: npm run build

Watch for changes: npm run dev 

## Misc details

- ES2017 on the backend and frontend, using webpack to transpile
