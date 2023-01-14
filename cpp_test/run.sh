#!/bin/bash
g++ main.cpp -o main
cat data.csv | ./main
