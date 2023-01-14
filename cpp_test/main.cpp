#ifndef MAIN
#define MAIN

#include <iostream>
#include <fstream>

#include "jsoncons/json.hpp"
#include "jsoncons_ext/csv/csv.hpp"

using namespace std;
using namespace jsoncons;
using namespace jsoncons::csv;

// Source: answer on https://stackoverflow.com/questions/25217349/how-to-convert-csv-file-to-json-using-c

int main(int argc, char** argv)
{
   // ifstream inFile;
   ofstream outFile;
   outFile.open("output.json");
   json result = decode_csv<json>(cin);
   outFile << result;

   return 0;
}

#endif
