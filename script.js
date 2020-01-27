//////////////////////////////////////////////////////
/////// 1. Случайная строка. //////////////
//////////////////////////////////////////////////////



// let resultStr = ""
// for (let i = 0; i < 25; i++) {
//   let asdA = Math.floor(Math.random() * (122 - 65 + 1)) + 65
//   let sfccA = String.fromCharCode(asdA)
//   if (sfccA === "E" || sfccA === "W") {
//     break
//   } else {
//     resultStr += sfccA
//   }    
// }
// console.log(resultStr)
// let lengReSt = resultStr.length
// console.log(lengReSt + " - количество символов в строке", typeof lengReSt)
// let asdB = Math.floor(Math.random() * (lengReSt))
// console.log(asdB + " - сгенерированое случайное целое число полученной строки")
// console.log(resultStr.charAt(asdB) +" - символ из полученной строки индекс которого равен " + asdB)
// if (resultStr.length < 5) {
//   console.log((resultStr + " ").repeat(4))
// } else {
//   console.log(resultStr.substr(4))
// }




//////////////////////////////////////////////////////
/////// 2. Посчитать факториал числа 12 //////////////
//////////////////////////////////////////////////////

//////// option 1 /////////

// let fact = 1;
// let factorialNumber = 12;
// while (factorialNumber > 0) {
//   fact = fact * factorialNumber;
//   factorialNumber--;
// } console.log(fact);

////////////////////////////////////////////////////////////////////

//////// option 2 /////////

// let factorialNumber = +prompt("ФАКТОРИАЛ ЧИСЛА \n\ Введите число ");
// let fact = 1;
// let i = factorialNumber;
// while (i > 0) {
//   fact = fact * i;
//   i--;
// } console.log(fact);
//   alert(" Факториал числа  " + factorialNumber + ".\n\ Равен  " + fact + ".");

//////////////////////////////////////////////////////////////////////
/////// 3. Треугольник, состоящий из символов #. /////////////////////
//////////////////////////////////////////////////////////////////////

//////// option 1 /////////

// let myString = ""
// const lastSymbol = "#"
// for (let i = 0; i < 5; i++) {
//   myString += lastSymbol
//   console.log(myString)
// }

//////// option 2 /////////

// let myString = ""
// const lastSymbol = "#"
// let i = 0
// while (i < 5) {
//   myString += lastSymbol
//   i++
//   console.log(myString)
// }



////////////////////////////////////////////////////////////////
///////////// Задание №4 Вывести треугольник ///////////////////
////////////////////////////////////////////////////////////////

//////// option 1 /////////

// let xxString =""
// const lastSymbol = "#"
// const replaceOnSymbol = " "
// let n = 5
// for (let a = n; a > 0; a--) {
//   xxString += lastSymbol  
// }
// for (let i = n; i > 0; i--) { 
//   let myString = xxString
//   for(let j = 0; j < (i - 1); j++) {
//     myString = myString.substr(0,j) + replaceOnSymbol + myString.substr(j + replaceOnSymbol.length)  
//   } 
//   console.log(myString)  
// }

//////////////////////////////////////////////////////////////////

//////// option 2 /////////

// let xxString = ""
// const lastSymbol = "#"
// const replaceOnSymbol = " "
// let a = i = 5
// while (a > 0) {
//   xxString += lastSymbol
//   a--
// }
// while (i > 0) {
//   let myString = xxString
//   let j = 0
//   while (j < i - 1) {  
//     myString = myString.substr(0,j) + replaceOnSymbol + myString.substr(j + replaceOnSymbol.length)
//     j++
//   }
//   i--
//   console.log(myString)
// }



















