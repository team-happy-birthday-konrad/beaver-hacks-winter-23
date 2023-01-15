#ifndef MAIN
#define MAIN

#include <iostream>
#include <fstream>

#include "jsoncons/json.hpp"
#include "jsoncons_ext/csv/csv.hpp"

using namespace std;
using namespace jsoncons;
using namespace jsoncons::csv;

// Code adapted from answer here: https://stackoverflow.com/a/25217457
// CC BY-SA 4.0, license information here: https://creativecommons.org/licenses/by-sa/3.0/
// Per sharealike, this file is licensed under the same license.

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
