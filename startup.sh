#!/bin/bash
# cd into backend directory and run the server

# check if node is installed on the system
if ! [ -x "$(command -v node)" ]; then
  echo 'Error: node is not installed. Go to https://nodejs.org/ and install node before proceeding.' >&2
  exit 1
fi


cd backend
npm start & # run the server in the background
# cd into frontend directory and run the frontend
cd ../frontend
npm start
# cd back to the root directory
cd ..
