#!/bin/bash
# cd into backend directory and run the server

cd backend
npm test & # run the server in the background
# cd into frontend directory and run the frontend
cd ../frontend
npm start
# cd back to the root directory
cd ..
