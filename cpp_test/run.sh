#!/bin/bash
g++ main.cpp -I include/ -o main
cat data.csv | ./main
