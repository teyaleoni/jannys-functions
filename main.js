// Hi Janny!
// This is the file where you are going to be writing your answers.
// Remember to write out your answers first.
// Then when we meet at the end of the day you are going to explain the function to me
// verbally without looking at what you wrote.

// ---------------------------------------------------------------- //

// EXAMPLE FUNCTION:

// STEP 1:
// First you are going to explain the function as a whole,
// from the perspective of who's going to use the function. They just need to know what it does.

//  * Returns whether the person object has a non-empty name.
//  * If the name property of person is null or is an empty string, returns false.
//  * Returns true
//  */
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
