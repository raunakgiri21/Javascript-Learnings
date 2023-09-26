/* 
----------------------------------------------------------------
ARRAY DATA STRUCTURE
----------------------------------------------------------------
*/

const arr = [1, 2, 3, "Raunak"];
arr.push(4); //insert element at the end - O(1)
arr.unshift(0); //insert element at the beginning - O(n)
arr.pop(); //remove element at the end - O(1)
arr.shift(); //remove element at the beginning - O(n)
console.log(arr.includes(2)); // O(n)

for (const item of arr) {
  console.log(item);
} // iterate over all elements in the array - O(n)

const arr2 = arr.map((item, _index) => item + _index);
arr2.forEach((item, _index) => console.log(item)); // O(n)
const arr3 = arr.filter((item, _index) => item % 2); // O(n)
console.log([...arr3]);
const accRes = arr.reduce((res, item, _index) => (res += item), 0); // O(n)
console.log(accRes);

const newArr = [1, 2, 3, 4, 5, 6];

newArr.splice(1, 2); // from index 1 remove 2 elements - O(n)
console.log(newArr);

newArr.splice(2, 0, "a", "b"); // from index 2 remove 0 elements and add these 2 elements - O(n)
console.log(newArr);

const slicedArr = newArr.slice(1, 4); // select elements from index 1 untill index 4 - O(n)
console.log(slicedArr);

// concat - O(n)
// sort - O(nlogn)
// split / join - O(n)
