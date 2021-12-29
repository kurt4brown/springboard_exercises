//findUserByUsername
//Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string.
//The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

function findUserByUsername(arr, user) {
    return arr.find(function(value){
      return value.username === user;
    })
  }

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
];
console.log("\n findUserByUsername")
console.log(findUserByUsername(users, 'mlewis')); // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')); // undefined

//removeUser
//Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array
//and return this object. If the object is not found, return undefined.
function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1) return;
  
    return usersArray.splice(foundIndex,1)[0];
}

console.log("\n removeUser")
console.log(removeUser(users, 'akagen')); // {username: 'akagen'}
console.log(removeUser(users, 'akagen')); // undefined
