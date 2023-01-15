#!/bin/bash
g++ main.cpp -I include/ -o main
cat data.csv | ./main
cat output.json | sed 's/" *"/null/g' > output-new.json
