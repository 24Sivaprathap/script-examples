// 2.	Given a string, reverse each word in the sentence
// function string_reverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log(string_reverse("Sivaprathap"));
// console.log(string_reverse("MCA"));
// console.log(string_reverse("NSchool Academy"));



// 5.	Write the code given If two strings are anagrams of one another, then return true.
// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if (len1 !== len2) {
//         console.log('Invalid Input');
//         return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if (str1 === str2) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// checkStringsAnagram("indian", "ndiani")



// 6.	Write the code to find the number of consonants & vowels in user given sentence and display them separately in a table
// function getCount(str) {
//     var vowelsCount = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelsCount++
//         }
//     }
//     return vowelsCount
// }



// var userData = prompt("Enter any text here");
// var a = 0;
// var e = 0;
// var i = 0;
// var o = 0;
// var u = 0;
// var constants = 0;
// var count;

// for (count = 0; count <= userData.length; count++) {
//     if ((userData.charAt(count).match(/[aeiou]/))) {
//         a++;
//         e++;
//         i++;
//         o++;
//         u++;
//     } else if ((userData.charAt(count).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))) {

//         constants++;
//     }
// }
// console.log("a: " + a);
// console.log("e: " + e);
// console.log("i: " + i);
// console.log("o: " + o);
// console.log("u: " + u);
// console.log("constants: " + constants);



// program to count the number of vowels in a string

// defining vowels
// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {
//     // initialize count
//     let count = 0;

//     // loop through string to test if each character is a vowel
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }

//     // return number of vowels
//     return count
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);



// 8.	JavaScript Program to Display Date and Time
// let current = new Date();

// let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
// let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
// let dateTime = cDate + ' ' + cTime;

// console.log(dateTime);




// 9.	JavaScript Program to Check Leap Year JavaScript Program to Format the Date (dd/mm/yyyy)
// program to check leap year
// function checkLeapYear(year) {

//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);



// program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);



// 10.	Javascript Program to Display Current Date
// let currentDate = new Date();

// let cDay = currentDate.getDate();
// let cMonth = currentDate.getMonth() + 1;
// let cYear = currentDate.getFullYear();

// console.log("<b>" + cDay + "/" + cMonth + "/" + cYear + "</b>");




//12. program to create a countdown timer

// time to countdown from (in milliseconds)
// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// // countdown timer
// let x = setInterval(function () {

//     // get today's date and time in milliseconds
//     let now = new Date().getTime();

//     // find the interval between now and the countdown time
//     let timeLeft = countDownDate - now;

//     // time calculations for days, hours, minutes and seconds
//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
//     const seconds = Math.floor((timeLeft / 1000) % 60);

//     // display the result in the element with id="demo"
//     console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

//     // clearing countdown when complete
//     if (timeLeft < 0) {
//         clearInterval(x);
//         console.log('CountDown Finished');
//     }
// }, 2000);
