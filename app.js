// const getButton = document.getElementById("get-button");
// const sentButton = document.getElementById("sent-button");

// const getData = function () {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = () => {
//     const result = xhr.response;
//     console.log(result);
//   };
// };
// const sentData = function () {};

// getButton.addEventListener("click", getData);
// sentButton.addEventListener("click", sentData);

// let names = [
//   "redwan",
//   "redwan",
//   "redwan",
//   "israfil",
//   "israfil",
//   "farid",
//   "farid",
//   "injabul",
//   "injabul",
// ];
// function removeDuplicateName(name) {
//   let selected = [];
//   for (let i = 0; i < name.length; i++) {
//     let myNames = name[i];
//     if (selected.indexOf(myNames) === -1) {
//       selected.push(myNames);
//     }
//   }
//   return selected;
// }

// console.log(removeDuplicateName(names));

// const reversed = (num) => {
//   let reversed = num.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(num);
// };

// console.log(reversed(-123));

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
//     console.log(strArr[i]);
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





const person = [
    {
        name:'Redwan islam', id:1, cgp:2.5
    },
    {
        name:'Farid islam', id:7, cgp:4.5
    },
    {
        name:'Israfil islam', id:3, cgp:3.5
    },
    {
        name:'Injabul islam', id:4, cgp:2.5
    },
    {
        name:'Majnu islam', id:5, cgp:2
    },
    {
        name: 'Hasib islam', id: 6, cgp: 3
    },
    {
        name: 'Rohim islam', id: 2, cgp: 1.5
    }
]

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.reduce((prev,cur) => {
//     return prev + cur;
    
// }, 0)

// console.log(result);


// const mapped = person.map((value) => {
//     return {
//         ...value,
//         mgs:`Hello MR. ${value.name} your result is published and you ${value.cgp < 3 ? 'filed':'passed'}`
//     }
// })

// console.log(mapped);



// const toUpperCase = (str) => {
//     let word = [];
//     for (let ele of str.split(' ')) {
//         word.push(ele[0].toUpperCase() + ele.slice(1))
//     }
//     return word.join(' ')
// };

// console.log(toUpperCase('i love programming, programming is a smart passion'));


// const lessThen = (num) => {
//     if (num <= 5) {
//         return true;
//     } else {
//         return false;
//     }
// }

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
//     return (twoPointers * 2) + (threePointers * 3)
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
//     let result = 'JavaScript';
//     return name + result;
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
//     if (a > b) {
//         return true;
//     } else {
//         return false;
//     }
    
// }

// console.log(lessThen100(84,35));




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
//     var newArray = [];
//     for (var i = 1; i <= number; i++){
//         newArray.push(i);
//     }
//     return newArray;
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


const showTime = (time) => {
    let currentTime = '';
    if (time >= 12) {
        currentTime = 'pm';
    } else {
        currentTime = 'am';
    }
    
    if (time > 12) {
        console.log(currentTime =time - 12);
    }




    return currentTime
}

console.log(showTime(2));
console.log(showTime(12));



