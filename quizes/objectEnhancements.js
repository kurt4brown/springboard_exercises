//1.
//rewrite
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (first, last) => ({first, last});

console.log("Same keys and values")
console.log(createInstructor("Harold", "Whitman"));

//rewrite
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }
//instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};
console.log("\n Computed Property Names");
console.log(instructor);

//rewrite
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

const instructor_two= {
    firstname:"Colt",
    sayHi:()=> "Hi!",
    sayBye(){
        return this.firstname + "says bye!";
    },
};
console.log("\n Object Methods");
console.log(instructor_two);

// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

const createAnimal = (species, verb, noise) => ({species, [verb]:()=>noise});
console.log("\n createAnimal");
console.log(createAnimal("dog", "bark", "Woooof!"));