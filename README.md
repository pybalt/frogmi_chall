# Frogmi Challenge

## INSTRUCTIONS

1. Clone the repo
2. Open react app folder `cd react-app` and install npm modules
   `npm i`
3. This will create node_modules which is important to build docker container.
4. Then: `docker-compose build`
5. And finally: `docker-compose up`

The frontend project contains two endpoints,
root entpoint `/` which is a table with filters and pagination
to visualize data.
the swagger endpoint `/swagger` which is to test the API

Also, the backend project contains a single endpoint
`api/features` with GET and POST methods.

GET will obtain a list of features, and POST will create a comment for a feature.
