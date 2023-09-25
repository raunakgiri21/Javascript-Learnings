/* 
----------------------------------------------------------------
OBJECT DATA STRUCTURE
----------------------------------------------------------------
*/

const obj = {
  name: "Heisenberg",
  age: "38",
  sayMyName: function () {
    console.log(`${this.name}!, You Are Goddamn Right !!!`);
  }, // don't use arrow func - closure issue
};

obj.job = "dealer"; // O(1)
console.log(obj.name, obj["age"], obj.job); // O(1)
obj.sayMyName();

// obj.keys() ; obj.values() ; obj.entries() // O(n)
