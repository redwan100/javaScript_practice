let names = [
  "redwan",
  "redwan",
  "redwan",
  "israfil",
  "israfil",
  "farid",
  "farid",
  "injabul",
  "injabul",
];
function removeDuplicateName(name) {
  let selected = [];
  for (let i = 0; i < name.length; i++) {
    let myNames = name[i];
    if (selected.indexOf(myNames) === -1) {
      selected.push(myNames);
    }
  }
  return selected;
}
console.log(removeDuplicateName(names));

// const reversed = (num) => {
//   let reversed = num.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(num);
// };

// console.log(reversed(-123));

const reversed = (str) => {
  let rev = str.split(" ").reverse().join();
  return rev;
};

console.log(reversed("love"));

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

const str = "madam";
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

const person = [
  {
    name: "Redwan islam",
    id: 1,
    cgp: 2.5,
  },
  {
    name: "Farid islam",
    id: 7,
    cgp: 4.5,
  },
  {
    name: "Israfil islam",
    id: 3,
    cgp: 3.5,
  },
  {
    name: "Injabul islam",
    id: 4,
    cgp: 2.5,
  },
  {
    name: "Majnu islam",
    id: 5,
    cgp: 2,
  },
  {
    name: "Hasib islam",
    id: 6,
    cgp: 3,
  },
  {
    name: "Rohim islam",
    id: 2,
    cgp: 1.5,
  },
];

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.reduce((prev,cur) => {
//     return prev + cur;

// }, 0)

// console.log(result);

const mapped = person.map((value) => {
  return {
    ...value,
    mgs: `Hello MR. ${value.name} your result is published and you ${
      value.cgp < 3 ? "filed" : "passed"
    }`,
  };
});

console.log(mapped);

const toUpperCase = (str) => {
  let word = [];
  for (let ele of str.split(" ")) {
    word.push(ele[0].toUpperCase() + ele.slice(1));
  }
  return word.join(" ");
};

console.log(toUpperCase("i love programming"));

const lessThen = (num) => {
  return (x = num <= 5 ? true : false);
};

console.log(lessThen(5));

// 5. Basketball Points
// Description: You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// function points(twoPointers, threePointers) {
// 	//start here
// }
// Examples:
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100

function points(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

console.log(points(1, 1));

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

function nameString(name) {
  let result = "JavaScript";
  return name + result;
}

console.log(nameString("Bogra"));

// 7. Less Than 100?
// Description: Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// function lessThan100(a, b) {
// 	//start here
// }
// Examples:
// lessThan100(22, 15) ➞ true
// lessThan100(83, 34) ➞ false
// lessThan100(3, 77) ➞ true

function lessThen100(a, b) {
  let sum = a + b;
  return (x = sum < 100 ? true : false);
}

console.log(lessThen100(3, 77));

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

function printArray(number) {
  var newArray = [];
  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log(printArray(6));

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

const showTime = (hour) => {
  if (hour > 0 && hour < 12) {
    return hour + "am";
  } else if (hour > 12 && hour < 24) {
    return hour - 12 + "pm";
  } else if (hour === 24) {
    return "00" + "pm";
  } else {
    return "please type some number";
  }
};

console.log(showTime(22));

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

function isSameNum(num1, num2) {
  return (isEqual = num1 === num2 ? true : false);
}
console.log(isSameNum(4, 8));

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

function footballPoints(wins, draw, losses) {
  return wins * 3 + draw * 1 + losses * 0;
}

console.log(footballPoints(3, 4, 2));

// 3. Convert Hours and Minutes into Seconds
// Description: Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
// function convert(hours, minutes) {
// 	// happy coding
// }
// Examples
// convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0

function convert(hours, minute) {
  return hours * 60 * 60 + minute * 60;
}

console.log(convert(1, 3));

// 4. Fix the Expression
// Description: Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
// function isSeven(x) {
// 	return x="7"?false:true:false;
// }
// Examples
// isSeven(4) ➞ false
// isSeven(9) ➞ false
// isSeven(7) ➞ true

function isSeven(x) {
  return (x = x == "7" ? true : false);
}
console.log(isSeven(7));

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

function checkEquality(a, b) {
  return (x = a === b ? true : false);
}

console.log(checkEquality(1, 1));

// 6. Profitable Gamble
// Description: Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
// function profitableGamble(prob, prize, pay) {
// 	// code here
// }

// Examples
// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true

function profitableGamble(prob, prize, pay) {
  return prob * prize > pay;
}

console.log(profitableGamble(0.2, 50, 9));

// 7. Add up the Numbers from a Single Number
// Description: Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// function addUp(num) {
// 	// code here
// }
// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

function addUp(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

console.log(addUp(13));




// TODO: Extra problem solving


function multiple(numArr) {
  let arr = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 0) {
      numArr[i].toString().split(0);
    } else if (numArr[i]) {
      arr.push(numArr[i] * 2);
    } 
  }
    return arr;
};

console.log(multiple([0, 1, 0, 2, 3, 4, 5, 0]));



// TODO: Extra problem solving

// #jsproblemsolving
// #problemsolving
// মনে করুন একটি string দেয়া আছে এবং সেখানে uppercase, lowercase দুটোই মিশ্রিত। যদি প্রথম character lowercase এর হয় তবে ঐ string এ lower character এর length বের করতে হবে। আর যদি প্রথম character uppercase এর হয় তবে upper character এর length বের করতে হবে।
// যেমনঃ "BangLAdeSh" -> 4
// "jaVAscRiPt" -> 6
// function তৈরি করে কাজ করতে হবে এবং function এর ভিতরে অবশ্যই return statement ব্যাবহার করতে হবে যেন function টি value তে পরিনত হয়।

function getLength(str) {
  let newStr = '';
  if (str[0] <= "Z") {
    for (let i = 0; i < str.length; i++){
      if (str[i] <= "Z") {
        newStr += str[i];
      }
    }
     return `The length of capital letter => ${newStr.length}`
    
  } else if (str[0] > 'Z') {
    for (let i = 0; i < str.length; i++){
      if (str[i] > 'Z') {
        newStr += str[i];
      }
    }
    return `The length of small letter => ${newStr.length}`
  }   
}

console.log(getLength('ZaVaScript'));
console.log(getLength('prgRrMminG'));




// টাইটেল: Array থেকে ডুপ্লিকেট এলিমেন্ট বাদ দেয়া 
// এমন একটি ফাঙ্কশন বানাতে হবে যা প্যারামিটার হিসেবে নিবে একটি array  এবং আউটপুট দিবে এমন একটি array যেখানে কোনো ডুপ্লিকেট এলিমেন্ট থাকবে না। 
// Examples:
// removeDuplicate (["red", "green", "blue", "red", "brown", "green", "orange", "orange", "violet", "red" ]) --> ["red", "green", "blue", "brown", "orange", "violet" ]
// removeDuplicate(["mursalin", "jinius", "minhaz", "redwan", "farjana "]) --> ["mursalin", "jinius", "minhaz", "redwan", "farjana "]

const array = ["red", "green", "blue", "red", "brown", "green", "orange", "orange", "violet", "red" ];

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


function removeDuplicateName(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]) {
        arr.splice(j,1)
      }
    }
  }
  return arr;
}

console.log(removeDuplicateName(array));
