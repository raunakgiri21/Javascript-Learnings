/* 
----------------------------------------------------------------
SET DATA STRUCTURE
----------------------------------------------------------------
*/

const set = new Set([2, 3, 1]);
set.add(4); // O(1)
console.log(set.has(4)); // O(1)
set.delete(3); // O(1)
console.log(set.size);

for (const item of set) {
  console.log(item);
}
console.log(set.values());
