//16. const email = document.querySelector("#email");
// const icon1 = document.querySelector(".icon1");
// const icon2 = document.querySelector(".icon2");
// const error = document.querySelector(".error-text");
// const btn = document.querySelector("button");
// let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// function check() {
//     if (email.value.match(regExp)) {
//         email.style.borderColor = "green";
//         icon1.style.display = "none";
//         icon2.style.display = "block";
//         error.style.display = "none";
//         btn.style.display = "block";
//     }
//     else {
//         email.style.borderColor = "red";
//         icon1.style.display = "block";
//         icon2.style.display = "none";
//         error.style.display = "block";
//         btn.style.display = "none";

//     }
//     if (email.value == "") {
//         email.style.borderColor = "lightgray";
//         icon1.style.display = "none";
//         icon2.style.display = "none";
//         error.style.display = "none";
//         btn.style.display = "none";
//     }

// }


//19. program to check if a number is a float or integer value

// function checkNumber(x) {

//     // check if the passed value is a number
//     if (typeof x == 'number' && !isNaN(x)) {

//         // check if it is integer
//         if (Number.isInteger(x)) {
//             console.log(`${x} is integer.`);
//         }
//         else {
//             console.log(`${x} is a float value.`);
//         }

//     } else {
//         console.log(`${x} is not a number`);
//     }
// }

// checkNumber('hello');
// checkNumber(44);
// checkNumber(3.4);
// checkNumber(-3.4);
// checkNumber(NaN);




//20. program to get the dimensions of an image

// const img = new Image();

// // get the image
// img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// // get height and width
// img.onload = function () {
//     console.log('width ' + this.width)
//     console.log('height ' + this.height);
// }



//21. program to Remove All Whitespaces From a Text

// const string = '      Hello World       ';

// const result = string.split(' ').join('');

// console.log(result);




// 22.	JavaScript Program to Convert Date to Number
// program to convert date to number
// create date
// const d1 = new Date();
// console.log(d1);

// // converting to number
// const result = d1.getTime();
// console.log(result);