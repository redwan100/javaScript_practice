//   let reversed = num.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(num);
// };

// console.log(reversed(-123));

// const reversed = (str) => {
//   let rev = str.split(" ").reverse().join();
//   return rev;
// };

// console.log(reversed("love"));

// const palindrome = (str) => {
//   let strArr = str.split("");
//   let isPalindrome = false;
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] !== strArr[strArr.length - 1 - i]) {
//       isPalindrome = false;
//       break;
//     }
//     console.log(strArr[i]);
//     isPalindrome = true;
//   }
//   return isPalindrome;
// };

// console.log(palindrome("ulu"));

// const palindrome2 = (str) => {
//   return str.split('').every((char, index )=> {
//     return char === str[str.length - 1 - index];
//   })
// }

// console.log(palindrome2('same'));

// const string = 'i love programming';

// const capital = (string) => {
//   let words = [];
//   for (let word of string.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ')
// }

// console.log(capital(string));

// const str = "madam";
// const palindrome = () => {
//   let strArr = str.split("");
//   let isPalindrome = false;
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] !== strArr[strArr.length - 1 - i]) {
//       isPalindrome = false;
//       break;
//     }
//     return (isPalindrome = true);
//   }
//   return isPalindrome;
// };

// console.log(palindrome());

// const numbers = [
//   { name: "redwan", number: 33, subject: "English" },
//   { name: "israfil", number: 44, subject: "bangla" },
//   { name: "farid", number: 77, subject: "sociology" },
//   { name: "rumi", number: 99, subject: "bangla" },
// ];

// const nameCheck = numbers.filter((number) => {
//   return number.number > 33 && number.subject === "bangla";
// });
// console.log(nameCheck);

// const str = "Redwan";

// const reverseString = (str) => {
// formula 1----------------
// const rev = str.split('').reverse()
// return rev.join('')

// formula 2--------------------

// let revStr = '';
// for (let i = str.length -1 ; i >= 0; i--){
//   revStr += str[i];
// }
// return revStr;

// formula 3----------------------
// let revStr = '';
// for (let i = 0; i <= str.length - 1; i++){

//   revStr = str[i] + revStr;
// }
// return revStr;

// formula 4------------------------------
// let revStr = '';
// for (let char of str) {
//   revStr = char + revStr;
// }
// return revStr;

// formula 5---------------------------------
// let revStr = '';
// str.split('').forEach((ele) => revStr = ele + revStr)
// return revStr;

// let revStr = "";
// return str.split("").reduce((revStr, curEle) => curEle + revStr, "");

// };

// console.log(reverseString(str));
// const str = 'racecar';

// const palindrome = (str) => {
//   let reverse = str.split('').reverse().join('');
//   return reverse === str;

// }

// console.log(palindrome(str));

// const int = -12345;
// const revInt = (int) => {
//   let rev = int.toString().split('').reverse().join('');
//   return parseInt(rev)*Math.sign(int)
// }

// console.log(revInt(int));

// const li = document.querySelectorAll('.items');
// const items = document.querySelector('ul');

// li.forEach(el => {
//     el.addEventListener('click', function () {
//         items.querySelector('.active').classList.remove('active');
//         el.classList.add('active');

//     })
// })

// const person = [
//   {
//     name: "Redwan islam",
//     id: 1,
//     cgp: 2.5,
//   },
//   {
//     name: "Farid islam",
//     id: 7,
//     cgp: 4.5,
//   },
//   {
//     name: "Israfil islam",
//     id: 3,
//     cgp: 3.5,
//   },
//   {
//     name: "Injabul islam",
//     id: 4,
//     cgp: 2.5,
//   },
//   {
//     name: "Majnu islam",
//     id: 5,
//     cgp: 2,
//   },
//   {
//     name: "Hasib islam",
//     id: 6,
//     cgp: 3,
//   },
//   {
//     name: "Rohim islam",
//     id: 2,
//     cgp: 1.5,
//   },
// ];

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.reduce((prev,cur) => {
//     return prev + cur;

// }, 0)

// console.log(result);

// const mapped = person.map((value) => {
//   return {
//     ...value,
//     mgs: `Hello MR. ${value.name} your result is published and you ${
//       value.cgp < 3 ? "filed" : "passed"
//     }`,
//   };
// });

// console.log(mapped);

// const toUpperCase = (str) => {
//   let word = [];
//   for (let ele of str.split(" ")) {
//     word.push(ele[0].toUpperCase() + ele.slice(1));
//   }
//   return word.join(" ");
// };

// console.log(toUpperCase("i love programming"));

// const lessThen = (num) => {
//   return (x = num <= 5 ? true : false);
// };

// console.log(lessThen(5));

// 5. Basketball Points
// Description: You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// function points(twoPointers, threePointers) {
// 	//start here
// }
// Examples:
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100

// function points(twoPointers, threePointers) {
//   return twoPointers * 2 + threePointers * 3;
// }

// console.log(points(1, 1));

// 6. Basic Variable Assignment
// Description: A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "JavaScript" and store it in a variable called result. He needs your help to fix this code.
// function nameString(name){
// 	// store the string "JavaScript" to a variable
// 	// concate the string "JavaScript" with name and assign it to an another variable called result
// 	// finally don't for to return
// }
// Examples:
// nameString("Zahidul") ➞ "ZahidulJavaScript"
// nameString("Bogra") ➞ "BograJavaScript"
// nameString("javaScript") ➞ "javaScriptJavaScript"

// function nameString(name) {
//   let result = "JavaScript";
//   return name + result;
// }

// console.log(nameString("Bogra"));

// 7. Less Than 100?
// Description: Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// function lessThan100(a, b) {
// 	//start here
// }
// Examples:
// lessThan100(22, 15) ➞ true
// lessThan100(83, 34) ➞ false
// lessThan100(3, 77) ➞ true

// function lessThen100(a, b) {
//   let sum = a + b;
//   return (x = sum < 100 ? true : false);
// }

// console.log(lessThen100(3, 77));

// 8. Buggy Code
// Description: Your friend created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
// function printArray(number) {
//   var newArray = [];

//   for(var i = 1; i <= number;) {
//     newArray.push(i);
//   }

//   return newArray;
// }
// Examples
// printArray(1) ➞ [1]
// printArray(3) ➞ [1, 2, 3]
// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

// function printArray(number) {
//   var newArray = [];
//   for (var i = 1; i <= number; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }

// console.log(printArray(6));

// 9. The Farm Problem
// Description: In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// function animals(chickens, cows, horses) {
// 	//start here
// }
// Examples
// animals(2, 3, 5) ➞ 36
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50

// function animals(chicken, cows, heros) {
//     return (chicken * 2) + (cows * 4) + (heros * 4);
// }

// console.log(animals(1, 2, 3));

// 10. Using the "&&" Operator
// Description: JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
// function and(a, b) {
// 	//start here
// }
// Examples
// and(true, false) ➞ false
// and(true, true) ➞ true
// and(false, true) ➞ false
// and(false, false) ➞ false

// function and(a, b) {
//     if (a && b ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(and(false, false));

// function and(a, b) {
//     const result = a & b ? true : false;
//     return result;
// }

// console.log(and(false, false));

// function findLargestNumber(arr) {
//     let highest = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > highest) {
//             highest = arr[i];
//         }
//     }
//     return highest
// }

// console.log(findLargestNumber([1, 2, 3, 5, 77, 22]));

// const arr = [3, 6, 8, 4, 9, 1];

// console.log(arr);

// function large(arr) {
//     const sortArr = arr.sort((a, b) => a - b);
// return sortArr[sortArr.length - 1];
// }

// console.log(large(arr));

// const showTime = (hour) => {
//   if (hour > 0 && hour < 12) {
//     return hour + "am";
//   } else if (hour > 12 && hour < 24) {
//     return hour - 12 + "pm";
//   } else if (hour === 24) {
//     return "00" + "pm";
//   } else {
//     return "please type some number";
//   }
// };

// console.log(showTime(22));

// const showTime = (hour) => {
//     if (hour > 0 && hour < 12) {
//         return hour + 'am';
//     }
//     if (hour > 12 && hour < 24) {
//         return (hour - 12) + 'pm';
//     }
//     if (hour === 24) {
//         return '00' + 'pm';
//     }
//     if (!hour || hour > 24) {
//         return 'please type some number';
//     }
// }

// console.log(showTime(25));

// function showEvenAndOddNum (arr)  {
//     let evenAndOddArr = [[], []];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenAndOddArr[0].push(arr[i])
//         } else {
//             evenAndOddArr[1].push(arr[i])
//         }

//     }
//     return evenAndOddArr;
// }

// console.log(showEvenAndOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// function showEvenAndOddNum(arr) {
//     let evenArr = [];
//     let oddArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0) {
//             evenArr.push(arr[i])
//         } else {
//             oddArr.push(arr[i])
//         }
//     }
//     return [evenArr, oddArr];
// }

// console.log(showEvenAndOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 1. Are the Numbers Equal?
// Description: Create a function that returns true when num1 is equal to num2; otherwise return false.
// function isSameNum(num1, num2) {
// 	// start here
// }
// Examples
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false
// Notes: Don't forget to return the result.

// function isSameNum(num1, num2) {
//   return (isEqual = num1 === num2 ? true : false);
// }
// console.log(isSameNum(4, 8));

// 2. Football Points
// Description: Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// consider the below notes:
// wins get 3 points
// draws get 1 point
// losses get 0 points
// function footballPoints(wins, draws, losses) {
// 	// code here
// }
// Examples
// footballPoints(3, 4, 2) ➞ 13
// footballPoints(5, 0, 2) ➞ 15
// footballPoints(0, 0, 1) ➞ 0
// Notes: Inputs will be numbers greater than or equal to 0.

// function footballPoints(wins, draw, losses) {
//   return wins * 3 + draw * 1 + losses * 0;
// }

// console.log(footballPoints(3, 4, 2));

// 3. Convert Hours and Minutes into Seconds
// Description: Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
// function convert(hours, minutes) {
// 	// happy coding
// }
// Examples
// convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0

// function convert(hours, minute) {
//   return hours * 60 * 60 + minute * 60;
// }

// console.log(convert(1, 3));

// 4. Fix the Expression
// Description: Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
// function isSeven(x) {
// 	return x="7"?false:true:false;
// }
// Examples
// isSeven(4) ➞ false
// isSeven(9) ➞ false
// isSeven(7) ➞ true

// function isSeven(x) {
//   return (x = x == "7" ? true : false);
// }
// console.log(isSeven(7));

// 5. Equality Check
// Description: In this challenge, you must verify the equality of two different values given the parameters a and b.

// consider the following:
// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// function checkEquality(a, b) {
//   //code here
// }
// Examples
// checkEquality(1, true) ➞ false
// checkEquality(0, "0") ➞ false
// checkEquality(1,  1) ➞ true
// From Jahidul Islam to Everyone:  11:50 PM

// function checkEquality(a, b) {
//   return (x = a === b ? true : false);
// }

// console.log(checkEquality(1, 1));

// 6. Profitable Gamble
// Description: Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
// function profitableGamble(prob, prize, pay) {
// 	// code here
// }

// Examples
// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true

// function profitableGamble(prob, prize, pay) {
//   return prob * prize > pay;
// }

// console.log(profitableGamble(0.2, 50, 9));

// 7. Add up the Numbers from a Single Number
// Description: Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// function addUp(num) {
// 	// code here
// }
// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// function addUp(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }

//   return result;
// }

// console.log(addUp(13));




// TODO: Extra problem solving


// function multiple(numArr) {
//   let arr = [];
//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] === 0) {
//       numArr[i].toString().split(0);
//     } else if (numArr[i]) {
//       arr.push(numArr[i] * 2);
//     } 
//   }
//     return arr;
// };

// console.log(multiple([0, 1, 0, 2, 3, 4, 5, 0]));



// TODO: Extra problem solving

// #jsproblemsolving
// #problemsolving
// মনে করুন একটি string দেয়া আছে এবং সেখানে uppercase, lowercase দুটোই মিশ্রিত। যদি প্রথম character lowercase এর হয় তবে ঐ string এ lower character এর length বের করতে হবে। আর যদি প্রথম character uppercase এর হয় তবে upper character এর length বের করতে হবে।
// যেমনঃ "BangLAdeSh" -> 4
// "jaVAscRiPt" -> 6
// function তৈরি করে কাজ করতে হবে এবং function এর ভিতরে অবশ্যই return statement ব্যাবহার করতে হবে যেন function টি value তে পরিনত হয়।

// function getLength(str) {
//   let newStr = '';
//   if (str[0] <= "Z") {
//     for (let i = 0; i < str.length; i++){
//       if (str[i] <= "Z") {
//         newStr += str[i];
//       }
//     }
//      return `The length of capital letter => ${newStr.length}`
    
//   } else if (str[0] > 'Z') {
//     for (let i = 0; i < str.length; i++){
//       if (str[i] > 'Z') {
//         newStr += str[i];
//       }
//     }
//     return `The length of small letter => ${newStr.length}`
//   }   
// }

// console.log(getLength('ZaVaScript'));
// console.log(getLength('prgRrMminG'));




// টাইটেল: Array থেকে ডুপ্লিকেট এলিমেন্ট বাদ দেয়া 
// এমন একটি ফাঙ্কশন বানাতে হবে যা প্যারামিটার হিসেবে নিবে একটি array  এবং আউটপুট দিবে এমন একটি array যেখানে কোনো ডুপ্লিকেট এলিমেন্ট থাকবে না। 
// Examples:
// removeDuplicate (["red", "green", "blue", "red", "brown", "green", "orange", "orange", "violet", "red" ]) --> ["red", "green", "blue", "brown", "orange", "violet" ]
// removeDuplicate(["mursalin", "jinius", "minhaz", "redwan", "farjana "]) --> ["mursalin", "jinius", "minhaz", "redwan", "farjana "]



// TODO: Problem solving =============




// const array = ["red", "green", "red", "blue", "red", "brown", "green", "orange", "orange", "violet", "red"];


// function removeDuplicate(arr) {
//   let myArr = [];
//   arr.forEach((item) => {
//     if (!myArr.includes(item)) {
//       myArr.push(item)
//     }
//   })
//   return myArr;
// }


// console.log(removeDuplicate(array));
// function removeDuplicateName(arr) {
//   let array = [];
//   arr.forEach((value) => {
//     if (!array.includes(value)) {
//       array.push(value)
//     }
//   })
//   return array;
// }
// console.log(removeDuplicateName(array));


// function removeDuplicateName(arr) {
//   for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//       if (arr[i] === arr[j]) {
//          arr.splice(j, 1);      
//       }
//     }
//   }
//   return arr;
// }

// console.log(removeDuplicateName(array));


// 3. Check if One Array can be Nested in Another
// Description: Create a function that returns true if the first array can be nested inside the second.
// function canNest(arr1, arr2) {
// 	// code here
// }

// arr1 can be nested inside arr2 if:
// arr1's min value is greater than arr2's min value.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false



// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// function myFunc(arr) {
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//        console.log(arr[i][j])
//     }
//   }
// }

// console.log(myFunc(arr));

// const point1 = [ 
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]
// const point2 = [ 
//   [1, 4],
//   [3, 4],
//   [0, 6],
// ]

// function func() {
//   const res = [];
//   const row = [];
//   for (let i = 0; i < point1.length; i++){
//     for (let j = 0; j < point1[i].length; j++){
//       row.push(point1[i][j] + point2[i][j]);    
//     }
//    res.push(row);
//   }
//   return res;
// }


// console.log(func());


// মনে করো তোমার ক্লায়েন্ট তোমাকে বললো, "আমার অনলাইন নিউজপেপারে ডেট এবং সময় প্রকাশ হয় ইংরেজিতে। যেহেতু আমার নিউজপেপারের রিডার সবাই বাঙালি, সেহেতু আমি চাচ্ছি যে ডেট এবং সময় যেন বাংলায় দেখায়।"
// এখন তোমার জন্য চ্যালেঞ্জ হয়ে দাঁড়ালো যে ইংরেজি ডিজিটকে বাংলায় কনভার্ট করা। এই প্রোগ্রামটি তৈরী করতে পারলেই, ক্লায়েন্ট যা চাচ্ছে তা তুমি করে দিতে পারবে। 
// উপরের ঘটনাকে বিবেচনা করে এমন এনকি function create করো যা কিনা ইংরেজি নাম্বারকে বাংলায় রূপান্তর করবে। 
// Example :
// converToBanglaNumber(2021)  --> ২০২১
// converToBanglaNumber(10999) --> ১০৯৯৯
// নোট : Let's take this challenge and accomplish

// 

// function convertToBanglaNumber(num) {
//   let numStr = String(num);
//   let convertNum = '';
//   let engNum = '012345689';
//   let bangNum = '০১২৩৪৫৬৭৮৯';

//   for (let i = 0; i < numStr.length; i++){
//     for (let j = 0; j < engNum.length;j++){
//       if (numStr[i] === engNum[j]) {
//         convertNum+=bangNum[j]
//       }
//     }
//   }
//   return convertNum;
// }

// console.log(convertToBanglaNumber(22));




// Converting Objects to Arrays
// Description: Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// function toArray(obj) {
	
// }
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

// Notes
// Return an empty array if the object is empty.

// const object = {
//   name: 'redwan',
//   des:'freelancer'
// }
// function toArray(obj) {
//   return Object.entries(obj);
// }
// console.log(toArray({ a: 1, b: 2 }));

// let arr = [];
// for (let element in object) {
//   arr.push([element,object[element]])
// }
// console.log(arr);




// 2. Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// function arrayOfMultiples (num, length) {
	
// }
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Notes
// Notice that num is also included in the returned array.

// function arrayOfMultiples(num, length){
//   let myArr = [];
//   for (let i = 1; i < length + 1; i++){
//     myArr.push(num *length[i])
//   }
//   return myArr;
// }



// console.log(arrayOfMultiples(7, 5));

// TODO: Extra problem solving

// এমন একটি function তৈরী করো যা argument হিসেবে একটি string array নেবে এবং চেক করে দেখবে যে array এর element string এর সাথে কোনো নাম্বার আছে কিনা। যদি থাকে তবে সেই element গুলো আরেকটা array এর মধ্যে নিয়ে return করতে হবে। যেমন - numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"], এখানে array এর প্রথম element "1a" তে নাম্বার আছে এবং "2b" তে নাম্বার আছে। তাই রিটার্ন হয়েছে ["1a", "2b"], আরো উদাহরণ - numInStr(["abc", "abc10"]) ➞ ["abc10"], numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"], numInStr(["this is a test", "test1"]) ➞ ["test1"]
// বি.দ্র: অরিজিনাল array কে change করা যাবে না।

// const arr = ["abc", "ab10c", "a10bc", "bcd",'my name is redwan']

// function numInStr(arr) {
//   let emArray = [];
//   let num = '0123456789';
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < num.length; j++){
//       if (arr[i].includes(num[j])) {
//         emArray.push(arr[i]);
//         break
//       }
//     }
//   }
//   return emArray;
// }

// console.log(numInStr(arr));



// function findLength(string) {
//   var result = 0;
//   for (var i = 0; i < string.length; i++) {
//     if(string[0] === string[0].toUpperCase()) {
//       if(string[i] === string[i].toUpperCase()) {
//           result++
//       }
//     }
//     if(string[0] >= "a" && string[0] <= 'z') {
//       if(string[i] >= 'a' && string[i] <= 'z') {
//           result++
//       }
//     }
//   }
//   return result;
// }
// console.log(findLength("BanGladesH"));
// console.log(findLength("jaVaScripT"));


// function findLength(str) {
//   let length = 0;
//   for (let i = 0; i < str.length; i++){
//     if (str[0] === str[0].toUpperCase()) {
//       if (str[i] === str[i].toUpperCase()) {
//         length++
//       }
//     } else if (str[0] === str[0].toLowerCase()) {
//       if (str[i] === str[i].toLowerCase()) {
//         length++
//       }
//     } 
//   }
//   return length;
// }

// console.log(findLength('JavaScript'));
// console.log(findLength('javaScript'));


// TODO: Extra Problem solving
// এমন একটি function বানাও যা argument হিসেবে নিবে ["red", "green", "blue", " teal", "oranged"] এই array-টি। এবং output দিবে যেকোনো একটি element randomly. অর্থাৎ function call হলে কোন একটি element যে output এ আসবে তা আমরা কেউ বলতে পারিনা।


// function pickRandom(arr){
//   let res = arr[Math.floor(Math.random() * arr.length)]
//   return res;
// }

// console.log(pickRandom(["red", "green", "blue", " teal", "orange"]));


// TODO: Extra Problem solving

// সবচেয়ে বড় শব্দ খুঁজে বের কর। মনে কর একটি function findLongestWord দেয়া আছে। আমি যদি "find the longest word" pass করি তবে output আসবে longest. কারন, longest word-টি সবচেয়ে বড় শব্দ। আবার "we have to be jinius by our activity" এর string pass করলে output আসতে হবে "activity". কারণ এটি হচ্ছে সবচেয়ে বড় শব্দ। আশাকরি সবাই বুঝতে পেরেছো।

// function pickLongestWord(str) {
//   let words = str.split(' ')
//   let longestWord = '';

//   for (let element of words) {
//     if (element.length > longestWord.length) {
//       longestWord = element;
//     }
//   }
//   return longestWord;
// }

// console.log(pickLongestWord("we have to be genius by our activity"));

// TODO: Another way------------------

// function pickLongest(str) {
//   let longest = '';
//   let strArr = str.split(' ');
//   strArr.map((ele) => {
//     if (ele.length > longest.length) {
//       longest = ele;
//     }
//   })
//   return longest;
// }


// console.log(pickLongest('i have lots of string'));


// TODO: Extra Problem solving-------------------------
// "zahid" এই string কে reverse কর। output --> "dihaz"

// function reverse(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--){
//     revStr += str[i];
//   }
//   return revStr;
// }

// console.log(reverse('zahidul islam'));


// create a function that takes an argument as string and returns the character which appears the most.

// function mostAppearingChar(str) {

//   let count = 1;
//   for (let i = 0; i < str.length; i++){
//     for (let j = i + 1; j < str.length; j++){
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(mostAppearingChar('bangladesh')) // --> "a appears 2 times"
// console.log(mostAppearingChar('beautiful')) // --> "u appears 2 times"
// console.log(mostAppearingChar('tiktok')) // --> "t and k appears 2 times"




// getString([
//   [1, 3, 2, 'a', 7, 9, 4, 6, 8],
//   [4, 9, 8, 2, 6, 1, 'b', 7, 5],
//   ['c', 'h', 6, 3, 8, 4, 2, 1, 9],
//   [6, 4, 3, 1, 'd', 8, 7, 9, 2],
//   [5, 2, 'e', 7, 9, 3, 8, 4, 6],
//   [9, 8, 7, 4, 2, 'f', 5, 3, 1],
//   [2, 1, 4, 9, 3, 5, 6, 8, 'g'],
//   [3, 'h', 5, 8, 1, 7, 9, 2, 4],
//   [8, 7, 9, 6, 4, 2, 1, 'i', 3]
// ])
// function doneOrNot(board) {
//   //your code goes here
// }
// Tomader kaj hochche array gulo theke shudhu matro string gulo niye notun ekti array return korte hobe.
// result should be like this ----> ["a", "b", "c", " h", "d", "e", "f", "g", "h", "i"]
// বি.দ্রঃ splice method ব্যবহার করা বাধ্যতামূলক।

//  let arr = [
//   [1, 3, 2, 'a', 7, 9, 4, 6, 8],
//   [4, 9, 8, 2, 6, 1, 'b', 7, 5],
//   ['c', 'h', 6, 3, 8, 4, 2, 1, 9],
//   [6, 4, 3, 1, 'd', 8, 7, 9, 2],
//   [5, 2, 'e', 7, 9, 3, 8, 4, 6],
//   [9, 8, 7, 4, 2, 'f', 5, 3, 1],
//   [2, 1, 4, 9, 3, 5, 6, 8, 'g'],
//   [3, 'h', 5, 8, 1, 7, 9, 2, 4],
//   [8, 7, 9, 6, 4, 2, 1, 'i', 3]
// ]

// TODO: Problem solving Example 1
// function getDoneOrNot(arr) {
  // function getString(arr) {
  //   arr = arr.flat()
  //   let temp = [];
  //   for (let i = 0; i < arr.length; i++){
  //     if (typeof arr[i] === 'string') {
  //       temp = temp.concat(arr.splice(i, 1,true))
  //       // i = i - 1;
  //     }
  //   }
  //   return temp;
  // }
  
  
  // console.log(getString(arr));
  
 
// }


// TODO: Problem solving Example 2

// function getDoneOrNot(arr) {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//       if (typeof arr[i][j] === 'string') {
//         temp = temp.concat(arr[i].splice(j,1, true))
//       }
//     }
//   }
//   return temp;
// }
// console.log(getDoneOrNot(arr));




// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// [5, 27, 39, 1001]

// const number = [[4, 5, 1, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];


// function largestOfFour(num) {
//   let max = -Infinity;
//   let largArrNum = [];
//   for (let i = 0; i < num.length; i++){
//     max = -Infinity
//     for (let j = 0; j < num[i].length; j++){
//       if (num[i][j] > max) {
//         max=num[i][j]
//       }
//     }
//     largArrNum.push(max);
//   }
//   return largArrNum
// }

// console.log(largestOfFour(number));


// var cities = ['Dhaka', 'Chittagong', 'Bogra', 'Dhaka', 'Sylhet', 'Kushtia', 'Faridpur', 'Bogra', 'Chittagong', 'Dinajpur', 'Faridpur']
// // ['Dhaka', 'Chittagong', 'Bogra', 'Sylhet', 'Kushtia', 'Faridpur', 'Dinajpur']

// function removeDuplicate(city) {
//   let unique = [];
//   for (let i = 0; i < city.length; i++) {
//     if (unique.includes(city[i])) {
//       continue;
//     } else {
//       unique.push(city[i])
//     }
//   }
//   return unique;
// }

// function removeDuplicate(city) {
//   let unique = [];
//   for (let i = 0; i < city.length; i++){
//     for (let j = i + 1; j < city.length; j++){
//       if (city[i] === city[j]) {
//         city.splice(j, 1);
//       }
//     }
//   }
//   return city;
// }

// console.log(removeDuplicate(cities))



// function getNumber() {
//   let num = [];
//   let str = [];
//   for (let i = 0; i < string.length; i++){
//     for (let j = 0; j < string[i].length; j++){
//       if (typeof string[i][j] === 'number') {
//        num=num.concat(string[i].splice(j,1,true))
//       }
//       if (typeof string[i][j] === 'string') {
//         str=str.concat(string[i].splice(j,1,true))
//        }
//     }
//   }
//   return [num,str];
// }

// console.log(getNumber());


// উপরে একটি function দেয়া আছে যার দুইটা parameters হলো string, যদি target parameter, str parameter এর শেষে ম্যাচ করে তবে return করতে হবে true, অন্যথায় return হবে false. এর অনেকগুলো test case আছে। সেগুলো আমি এক এক করে দিচ্ছি।

// function endingCheck(str, target) {
//   return str
//   }
  
//   console.log(endingCheck("Bastain", "n"));
  
// function endingCheck(str, target) {
//   str = str.split(target);
//   return str[str.length - 1] === '';
// }

// console.log(endingCheck('redwan','wan'));

// const str = 'redwan';
// console.log(str.split('a'));

// function checkStr(str, target) {
//   if (str.includes(target)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkStr('redwan',''));





// TODO: Problem solving

// function nestedArray(array, num){
//   return nestedArray
// }
// nestedArray([1,2,3,4,5,6,7,8], 4)
// output --> [[1,2], [3,4], [5,6], [7,8]]



// function nestedArray(array, num){
//   var result = []
//   var x = 0
 
//   if (array.length % num === 0) {
//     for(var i = 0; i < array.length; i = i + (array.length / num)) {
//       result[x] = array.slice(i, i + (array.length / num))
//       x++;
//     }
//   }
  
//   return result
// }
// console.log(nestedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))


// TODO: Example 1===========

// function replaceInAlphabeticalOrder(str) {
//   let arr = str.split('');
//   let temp = '';
//   for (let i = 0; i < str.length; i++){
//     for (let j = i + 1; j < str.length; j++){
//       if (arr[i] > arr[j]) {
//         console.log(arr[i]);
//         console.log(arr[j]);
//         temp = arr[i] // temp = z
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }      
//     }
//   }
//   return arr.join('');
  
// }

// console.log(replaceInAlphabeticalOrder('zahidul'));


// TODO: Example 2=========

// function replaceInAlphabeticalOrder(str) {
//   // code here
//   var myStr = ''
//   var mainStr = 'abcdefghijklmnopqrstuvwxyz';
//   for (var i = 0; i < mainStr.length; i++) {
//       if (str.includes(mainStr[i])) {
//           myStr = myStr + mainStr[i]
//       }
//   }
//   return myStr
// }
// console.log(replaceInAlphabeticalOrder('zahidul'))



// TODO: Example 1==============
// function capitalize(str) {
//   str = str.toLowerCase()
//   let word = [];
//   for (let ele of str.split(' ')) {
//     word.push(ele[0].toUpperCase() + ele.slice(1))
//   }
//   return word.join(' ');
// }

// console.log(capitalize('i love programTinG'));



// // TODO: Example 2===========

function capitalize1(str) {
  str = str.toLowerCase();
  let word = [];
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++){
    word.push(arr[i][0].toUpperCase() + arr[i].slice(1))
  }
  return word.join(' ')
}

console.log(capitalize1('i love programing. A'));



// function getNum(str) {
//   let temp = [];
//   for (let i = 0; i < str.length; i++){
//     for (let j = 0; j < str[i].length; j++){
//       if (typeof str[i][j] === 'string') {
//         temp = temp.concat(str[i].splice(j, 1));
//         i -= i;
//       }
//     }
//   }
//   return temp
// }


// console.log(getNum(arr));


// TODO: Problem solving ---------------:
// function reverse(str) {
//   let rev = '';
//   let alp = 'abcdefghijklmnopqrstuvwxyz';
//   for (let i = 0; i < alp.length; i++){
//     if (str.includes(alp[i])) {
//       rev += alp[i]
//     }
//   }

//   return rev;
// }

// console.log(reverse('zahidul'));


// TODO: Problem solving

//  let arr = [
//   [1, 3, 2, 'a', 7, 9, 4, 6, 8],
//   [4, 9, 8, 2, 6, 1, 'b', 7, 5],
//   ['c', 'h', 6, 3, 8, 4, 2, 1, 9],
//   [6, 4, 3, 1, 'd', 8, 7, 9, 2],
//   [5, 2, 'e', 7, 9, 3, 8, 4, 6],
//   [9, 8, 7, 4, 2, 'f', 5, 3, 1],
//   [2, 1, 4, 9, 3, 5, 6, 8, 'g'],
//   [3, 'h', 5, 8, 1, 7, 9, 2, 4],
//   [8, 7, 9, 6, 4, 2, 1, 'i', 3]
// ]

// function getStr(arr) {
//   let res = '';
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//       if (typeof arr[i][j] === 'string') {
//         res = res.concat(arr[i].splice(j,1,true))
//       }
//     }
//   }

//   return res;
// }

// console.log(getStr(arr));

// function getTrueOrFalse(str, target) {
//   return str.substr(-target.length) === target;
// }

// console.log(getTrueOrFalse('something is special','al'));


const arr = [
  [1, 24, 3],
  [1, 2, 53],
  [1, 55, 3],
  [1, 5, 3], 
]

// const getLargeNum = () => {
//   let max = -Infinity;
//   let temp = [];
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//       if (arr[i][j] > max) {
//         max = arr[i][j]
//       }
//     }
//     temp.push(max)
//   }
//   return temp;
// }

// console.log(getLargeNum());




// function getGCF(a, b) {
//   let ln = a > b ? a : b
//   let sn = ln === a ? b : a
//   let gcf
//   let remainder = ln % sn // remainder = 10


//   for (let i = 0; i < Infinity; i++) {
//     if (remainder !== 0) {
//       ln = sn
//       sn = remainder
//       remainder = ln % sn
//       }
     
//       if(remainder === 0) {
//         gcf = sn
//         break;
//       }
//   }
//   return gcf
// }
// console.log(getGCF(24, 4))



// function myReplace(str, before, after) {
//   let words = str.split(' ')
//   for (let i = 0; i < words.length; i++){   
//     if (words[i] === before) {
//       if (words[i][0] === words[i][0].toUpperCase()) {
//         after = after[0].toUpperCase() + after.slice(1)
//       } else {
//         after = after[0].toLowerCase() + after.slice(1)
//       }  
//       words[i] = after;
//     }
//   }
//   return words.join(' ')
// }

// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); //should return --> "Let us get back to more Algorithms"


// function titleCase(str) {
//   str = str.toLowerCase()
//   str = str.split(' ')
//   var myStr = []
//   for (var i = 0; i < str.length; i++) {
//     console.log(str[i])
//     myStr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
//     // newStr.push(str[i].charAt(0).toLowerCase() + str[i].slice(1)) 
//     console.log(str[i].slice(1))
//   }
//   return myStr.join(' ')
// }
// console.log(titleCase("I'm a little tea pot"))
// console.log(titleCase("sHoRt AnD sToUt"))
// titleCase("I'm a little tea pot"); // --> "I'm A Little Tea Pot"
// testCase:-
// titleCase("sHoRt AnD sToUt") //--> "Short and Stout"
// titleCase("HERE IS MY HANDLE.HERE IS MY SPOUT") --> "Here Is My Handle. Here Is My Spout"
// titleCase("bamgladeSH is a-beauTiful Country./WE*love our$COUNTRY")









// function pairElement(str) {
// 	const DNA = []
//   for(const char of str) {
//     if(char === 'A') {
//       DNA.push([char, 'T'])
//     }
//     if(char === 'T') {
//       DNA.push([char, 'A'])
//     }
//     if(char === 'C') {
//       DNA.push([char, 'G'])
//     }
//     if(char === 'G') {
//       DNA.push([char, 'C'])
//     }
//   }
//   return DNA
// }



console.log(pairElement("ATCGA")) 
//should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

pairElement("TTGAG") 
//should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

pairElement("CTCTA")
//should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]


const time = '01:34PM' // <-- 12 hours format time

function formatChange(time) {
  let amOrPm = 'AM';
}

formatChange(time) // 24 hours format time --> "13:34"

