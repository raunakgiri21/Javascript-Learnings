/* 
----------------------------------------------------------------
Fibonacci, Factorial, Prime Number, Power of 2 
----------------------------------------------------------------
*/

const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(10));

const factorial = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

console.log(factorial(5));

const checkPrime = (n) => {
  if (n < 2) return false;
  let res = true;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      res = false;
      break;
    }
  }
  return res;
};

console.log(checkPrime(1));
console.log(checkPrime(5));
console.log(checkPrime(4));

const isPower2 = (n) => {
  if (n < 1) return false;
  return Boolean((n & (n - 1)) === 0);
};

console.log(isPower2(2));
console.log(isPower2(1));
console.log(isPower2(15));

const rFibonacci = (n) => {
  if (n <= 1) return n;
  return rFibonacci(n - 1) + rFibonacci(n - 2);
};

/* 
----------------------------------------------------------------
Recursion - Fibonacci, Factorial
----------------------------------------------------------------
*/

console.log(rFibonacci(0));
console.log(rFibonacci(1));
console.log(rFibonacci(2));
console.log(rFibonacci(6));

const rFactorial = (n) => {
  if (n <= 1) return 1;
  return rFactorial(n - 1) * n;
};

console.log(rFactorial(0));
console.log(rFactorial(3));
console.log(rFactorial(5));

const rBinSearch = (e, s, arr, x) => {
  if (s > e) return -1;
  let mid = Math.floor((e + s) / 2);
  if (arr[mid] === x) return mid;
  else if (arr[mid] > x) return rBinSearch(mid - 1, s, arr, x);
  else return rBinSearch(e, mid + 1, arr, x);
};

/* 
----------------------------------------------------------------
Searching - Binary Search
----------------------------------------------------------------
*/

const binSearch = (arr, x) => {
  // let s = 0,
  //   e = arr.length - 1;
  //   while (s <= n) {
  //       const mid = Math.floor((e + s) / 2);
  //       if (arr[mid] === x) return mid;
  //       else if (arr[mid] > x) e = mid - 1;
  //       else s = mid + 1;
  //     }
  //     return -1;
  return rBinSearch(arr.length - 1, 0, arr, x);
};

console.log(binSearch([-5, 2, 4, 6, 10], 6));

/* 
----------------------------------------------------------------
Sorting - Bubble, Insertion, Quick, Merge Sort
----------------------------------------------------------------
*/

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
const bubbleSort2 = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let pivot = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > pivot) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = pivot;
  }
};

const quickSort = (arr) => {
  if (arr.length < 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const mergeTwoSortedArrays = (arr1, arr2) => {
  let res = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }
  return [...res, ...arr1, ...arr2];
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return mergeTwoSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
};

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
insertionSort(arr);
console.log(quickSort(arr));
console.log(mergeSort(arr));
console.log(arr);

/* 
----------------------------------------------------------------
[A X B]
----------------------------------------------------------------
*/

const cartesianProduct = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push([arr1[i], arr2[j]]);
    }
  }
  return res;
};

console.log(cartesianProduct([1, 2], [3, 4, 5]));

const climbingStaircase1 = (n) => {
  if (n <= 2) return n;
  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
};

/* 
----------------------------------------------------------------
Climbing Stairs
----------------------------------------------------------------
*/

const climbingStaircase = (n) => {
  let memo = new Array(n + 1);
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

console.log(climbingStaircase(3));

/* 
----------------------------------------------------------------
Tower of Hanoi
----------------------------------------------------------------
*/

const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

towerOfHanoi(2, "A", "C", "B"); // from-to-through

/* 
----------------------------------------------------------------
GCD, Permutaion, Combination
----------------------------------------------------------------
*/

const gcd = (a, b) => {
  if (a === 0) return b;
  return gcd(b % a, a);
};
console.log(gcd(36, 60));

const permutation = (n, r) => {
  let res = 1;
  for (let i = n; i >= n - r + 1; i--) res *= i;
  return res;
};
console.log(permutation(7, 2));

const combination = (n, r) => {
  let res = 1;
  for (let i = n; i >= n - r + 1; i--) res *= i / (n + 1 - i);
  return res;
};
console.log(combination(7, 2));
