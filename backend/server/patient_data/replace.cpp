#include <iostream>
#include <string>

using namespace std;

int main() {
   string text;
   string prop;
   for (int i = 0; i < 106; i++) {
      getline(cin, text, '.');
      getline(cin, text, '.');
      getline(cin, prop, '\n');
      cout << "patient_datum." << prop << ": " << "req.body." << prop << ";\n";
   }
   return 0;
}
