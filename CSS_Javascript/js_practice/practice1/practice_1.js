// function myFunction (fullName,nationality){
//   console.log( ' Hello ' + ' I am ' +  fullName + ' . ' + ' I am ' + nationality );
  
// } 
// myFunction ('Asif','Bangladeshi');
// (function (message) {
//   console.log( 'I am self invoked' , message);
// }) ( ' Hello ' );

// let maths = function (x,y) {
//   console.log( 'The value is ');  
//   return x * y ;
// };
// console.log(maths(3,4));

// function newFunc() { 
//   let firstName = ' Asif ' ;
//   console.log( firstName ) ;
// }
// newFunc()

// let numbers = [4,5,6,7,8] ;
// let sqNumbers = numbers.map(function (i){ 
// return i * i ;
// }) ;
// console.log(sqNumbers);

// let add = function (x,y){ 
  //   return x+y ;
  // } ;
  // console.log(add(5,6));
  
  // let add = (x,y) => x+y ;
  // console.log(add(5,7));
  
  
//  const language = ['Html','Css','Javascript','Php',true,50] ;
// language[4] = 'Tailwind Css'
// language.push('Angular.js');
//  console.log(language);

// const x = [1,2,3,4,5];
// const y = [1,2,3,4,5];
// const z = x.concat(y);
// console.log(z);

//  const a = [[1,2,3],[4,5,6],[2,4,6],];
//  console.log(a.flat());

// language.splice(0,2);
// console.log(language);

// let age = 25 ;
// if (age > 40){
//   console.log('you are already ready to drive') ;
// }else if (age > 18){
//   console.log('you are ready');
// }else {
//   console.log('you are not ready');
// }

// let category = 'car' ;
// let cartype ;

// switch (category){

//   case 'car' :
//     cartype = 'This is a car' ;
//     break ;
//     case 'motor bike' :
//       cartype = 'This is a motor bike' ;
//       break ;
//       default :
//       cartype = 'Unknown vehicle' ;
// }
// console.log(cartype);

// let car = ['BMW','VOLVO','TOYOTA','FORD','TESLA'];
// car.push('Saab');
// for ( let i=0 ; i<car.length;i++){
//   console.log(car[i]);
// }


// let person = {
//   Name : 'Shuvo',
//   Age  : 30,
//   Country : 'Bangladesh',
// };
// for (let i in person){
//   let capLetter = i.charAt(0).toUpperCase(0) + i.slice(1);
//   console.log(capLetter + ' : ' + person[i]);
// }


//  let car = ['BMW','VOLVO','TOYOTA','FORD','TESLA'];
//  car.forEach(function(i){
//   console.log(i);
//  });



// let map = new Map();
// map.set("b", 1);
// map.set("a", 2);
// map.set(1, 3);

// for (let key of map.keys()) {
//   console.log(key);
// }


// const fruits = ['Mango','Banana','Orange','Graps'];

// fruits.forEach((i,index)=> {
//   console.log(i,index);
// })
