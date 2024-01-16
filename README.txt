# Ark ASA Server Manager

## How to run locally (for development)
* Clone this repo and cd into the root directory, where /client and /server are at the top.
* cd into '/client', and run npm install. This will set up all of the dependencies for the front end.
* Run npm start once that completes, this will start up the React app.
* Next, open a _new_ terminal and make sure you are cd'ed into the '/client' directory, and run `npm run electron-dev`. 
This will start the Electron instance.
* Now create _another_ terminal, and cd into /server, then run 'npm install' once more to set up the dependencies for the backend.
* Finally, run 'npm start' and that will spin up your backend.
* Now you should have a running local instance of Ark ASA Server Manager.