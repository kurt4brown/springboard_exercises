// Q:   What is the difference between var and let?
// A:   a var variable is not block scoped. A var can be redeclared with var. Var can access a hoisted variable.

// Q:   What is the difference between var and const?
// A:   a const cannot be redeclared nor reassigned. A const is block scoped. A const cannot access a hoisted variable.
// What is the difference between let and const?
// Let can be reassigned.

//Q:   What is hoisting?
//A:   It’s the way that we explain how the JS compiler works when ordering. Variables are lifting or “hoisted” to the top of the scope they are declared in. 
//When using var, you can access the variable name and it’s undefined value before it is used later on.
//Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.

//Examples
const pi = 3.14; //creates a block scoped variable that cannot be reassigned nor redeclared. 
let PI = 3.14; // creates a block scoped variable that can be reassigned but not redeclared.
