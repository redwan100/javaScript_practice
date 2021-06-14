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


