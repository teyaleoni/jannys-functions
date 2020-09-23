// Hi Janny!
// This is the file where you are going to be writing your answers.
// Remember to write out your answers first.
// Then when we meet at the end of the day you are going to explain the function to me
// verbally without looking at what you wrote.

// ---------------------------------------------------------------- //

// EXAMPLE FUNCTION:

// STEP 1:
// First you are going to explain what the function does as a whole.
// I want you to explain it from the perspective of who's going to use the function.

//  * This function "hasName" returns whether the person object has a non-empty name.
//  * If the name property of person is null or is an empty string, returns false. If not returns true.
function hasName(person) {
  return person.name != null && person.name.length > 0
}

// ---------------------------------------------------------------- //

// STEP 2:
// Explain line by line what the function does.
function hasName(person) {
  return person.name != null && person.name.length > 0
  // First, make sure that the name property is not null. If it is null, immediately return false.
  // If it is not null, check the length of name. If there is at least one character in name, return
  // true, otherwise return false.
}

// EXERCISE 1
function greet(name) {
  return "Hello " + name + "!"
}

console.log(greet("Eric"))

// Day 1
// This function is called greet and has one parameter called name.
// It doesn't return a value.
// When greet is called, it will print out "Hello"
// to the value passed in as the argument to "name".
// For example, console.log(greet("Eric"));
// It will say "Hello Eric!"

// EXERCISE 2
var callback = function () {
  console.log("Done!")
}

setTimeout(callback, 5000)

// explaining 2
// There are two function in this exercise.
// The first one is anonymous function and the second one is synchromous function.
// The setTimeout function has callback function as the first parameter.
// This will execute callback function after 5 seconds by printing out "Done!"

// EXERCISE 3
function sumArray(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    count = count + arr[i]
  }
  return count
}

// explaining 3
// This function is called sumarray. It has one parameter, called arr.
// First, we declare the varible count and set its initial value of zero.
// Next, we use For Loop to iterate through each element of array,
// starting from index 0 untill the last index with incresing a value by 1 each time.
// Then, storing count of each loop to the varible.
// when it is done, it will return the count and stop the function.

// EXERCISE 4
function getLastValue(value) {
  const lastIndex = value.length - 1
  return value[lastIndex]
}

// This function is called getLastValue and has one parameter, called value.
// First, we create a varible lastIndex, which come from its length minus one.
// Once, when it is done, it will return the value of the last index by putting the last index with the value.

// EXERCISE 5
function factorial(x) {
  if (x == 0 || x == 1) {
    return 1
  }
  return x * factorial(x - 1)
}

// This function is called factorial with one parameter, x.
// if x equals 0 or 1, it will return 1.
// otherwise, it will return x multiplied by factorial of x minus 1.

// EXERCISE 6
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32)
}
