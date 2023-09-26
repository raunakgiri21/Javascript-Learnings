/* 
----------------------------------------------------------------
MAP DATA STRUCTURE
----------------------------------------------------------------
*/
// Maps are ordered collection of key-value pairs. Objects are unordered.
// Keys in Map can be of any type. In objects, keys are mainly number, string or symbol.
// Maps are iterables. Objects are not.
// Maps are only used to store data. Objects can have functions.

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

map.set("d", 4);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

map.clear();
