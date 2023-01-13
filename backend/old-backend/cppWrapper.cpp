#include <node.h>
using namespace v8;

int cppFunction(int input) {
    // C++ function logic goes here
    return output;
}

void cppWrapper(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    Local<Number> result = Number::New(isolate, cppFunction(args[0]->NumberValue()));
    args.GetReturnValue().Set(result);
}

void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "cppFunction", cppWrapper);
}

NODE_MODULE(cppWrapper, init)
