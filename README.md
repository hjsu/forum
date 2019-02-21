## Installation

Global Dependencies:

 - locally running postgres database (v9.5+)
 - sqitch (http://sqitch.org/)
 - node and yarn installed

Installation:

- fill out .env.example with real keys and cp to .env
- yarn install
- yarn run initialize
- yarn run db_seed if you wish to use the sample seeded db entries

## Running

yarn run start_api to start the api server
yarn run start_app to run the sample express app

navigate to localhost:3000

Manually rebuilding: yarn run build

Watch for changes: yarn run dev 

## Misc details

- ES2017 on the backend and frontend, using webpack to transpile
