let nums = [12, 15, 18, 30, 45, 7];

let number = nums.map(function (arr) {
  return arr * 2;
});

console.log(number);
console.log(nums);
console.log(nums[0]);
console.log(nums[5]);

console.log("");
console.log(number[0]);
console.log(number[3]);

console.log("");

//Squareroot
let num1 = [4, 9, 16];

let k = num1.map(function (s) {
  return Math.sqrt(s);
});

console.log(k);
console.log(`4:`, k[0]);
console.log(`9:`, k[1]);
console.log(`16:`, k[2]);

/*function square(num) {
  const squareRoot = num.map((number) => Math.sqrt(number));
}
square(num1);
*/

console.log("");
console.log("For and Map Method");

function squareRoot(clouds) {
  const num = clouds.map((mc) => Math.sqrt(mc));

  for (i = 0; i < num.length; i++) {
    console.log(`${clouds[i]}: ${num[i]}`);
  }
}
squareRoot(num1);

console.log("");
console.log("For Each Loop");

let newArr = [25, 36, 64, 81];
let setArr = [];

/*newArr.forEach(function (number) {
  const x = Math.sqrt(number);
  setArr.push(x);
});
console.log(setArr);
console.log(setArr[0]);
*/

console.log("");
console.log("Function of the above");

//declare function and set parameters
function sqrtArr(numx) {
  /*use the set parameters and use forEach function to loop
  through every root in an array */

  numx.forEach(function (numt) {
    const w = Math.sqrt(numt); //Declaring a value where square rooting will take place
    setArr.push(w); //pushing data into the empty array
  });
}
sqrtArr(newArr, setArr);
console.log(setArr);

/*
newArr.forEach(thisFunction);

function thisFunction(number) {
  Math.sqrt[newArr] = number;
} */
console.log("");
let newNum = [9, 25, 16];

// newNum.map();

function squares(d) {
  const mr = d.map((loya) => Math.sqrt(loya));

  for (i = 0; i < mr.length; i++) {
    console.log(`${newNum[i]}: ${mr[i]}`);
  }

  if (i % 2 == 0) {
    console.log(`${i}`);
  } else {
    console.log("Not square");
  }
}
squares(newNum);

console.log("");

let me = [25, 49, 64];
let empt = [];

function kamau(baba) {
  return baba.map((num) => Math.sqrt(num)).filter((root) => root % 2 === 0);
}
console.log(kamau(me));

/*function sqrRoot(daph) {
  daph.forEach(function (wicks) {
    const p = Math.sqrt(wicks);
    emptyArr.push(p);

    if (emptyArr % 2 == 0) {
      console.log("Even SquareRoot:");
    } else {
      ("Odd SquareRoot");
    }
  });
}
sqrRoot(newNum);
console.log(emptyArr);
*/
