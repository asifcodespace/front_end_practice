// let numbers = [2,4,6,8];
// let sqNumbers = numbers.map(function (number){
//   return number*number;
// });
// console.log(sqNumbers);


// let evensquare = [];
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//   evensquare.push(`Number: ${i},Square: ${i*i}`);
// } 
// }
// console.log(evensquare);

// for (let i = 1; i <= 20; i++){
//   if (i % 2 ===0) {
//     console.log(`Number: ${i}, Square: ${i*i}`);
//   }
// }

// let data = { evenNmubers: [] };
//  for (let i = 1; i <= 20; i++) {
// if (i % 2 === 0) {
//   data.evenNmubers.push({ Number: i, square: i*i });
//   }
//  }
//  console.log(JSON.stringify(data,null,2));
 

// let evenObj = {};
// let squareObj = {};
// let index = 1;
//  for (let i = 1; i <= 20; i++) {
//  if (i % 2 === 0) {
// evenObj[`num${index}`] = i;
// squareObj[`num${index}`] = i * i;
// index++;
//  }
// }
// console.log("Even Numbers:", evenObj);
// console.log("Squares:",squareObj);

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even: ${i}, Square: ${i*i}`);
//   }
// }

// let evenObj = {};
// let squareObj = {};
// let index = 1;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     evenObj[ `num${index}`] = i;
//     squareObj[`num${index}`] = i * i;
//     console.log({
//       evenNumber: evenObj[`num${index}`],
//       square: squareObj[`num${index}`]
//     });
//     index++;
//   }
// }

// function printEvenSquareCube() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//       console.log({
//         evenNumber: i,
//         square: i * i,
//         cube: i * i * i
//       });
//     }
//   }
// }

// printEvenSquareCube()

// function printEvenSquareCube() {
//   Array.from({length: 20}, (_, i) => i + 1)
//     .filter(num => num % 2 === 0)
//     .forEach(num => {
//       console.log({
//         evenNumber: num,
//         square: num ** 2,
//         cube: num ** 3
//       });
//     });
// }

// printEvenSquareCube();

// function square(num) {
//   return num ** 2;
// }

// function cube(num) {
//   return num ** 3;
// }

// function printEvenSquareCube() {
//   Array.from({length: 20}, (_, i) => i + 1)
//     .filter(num => num % 2 === 0)
//     .forEach(num => {
//       console.log({
//         evenNumber: num,
//         square: square(num),
//         cube: cube(num)
//       });
//     });
// }

// printEvenSquareCube();

function countGreaterThanPreviousAverage(arr) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      let avg = sum / i;
      if (arr[i] > avg) {
        count++;
      }
    }
    sum += arr[i];
  }

  return count;
}

let numbers = [2, 4, 6, 1, 10];
console.log(countGreaterThanPreviousAverage(numbers));
