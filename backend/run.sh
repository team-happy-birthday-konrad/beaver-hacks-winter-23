#!/bin/bash
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Starting it..."
    open --background -a Docker
    while ! docker info > /dev/null 2>&1; do
        sleep 1
    done
fi
docker-compose down --remove-orphans
docker-compose build
docker-compose up -d
echo ''
echo 'Running backend on http://localhost:4040/api/users'
