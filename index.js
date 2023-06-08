/////////////////////////////////  QUESTION ONE  /////////////////////////
// A promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used for handling asynchronous operations such as making API requests, reading/writing files, executing database queries, and more. They provide a way to work with asynchronous code in a more structured and manageable manner.

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  // The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
////////////////////////////////  QUESTION TWO  //////////////////////////
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.

fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR!🛑");
  fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile(
        "./starter/txt/final.txt",
        `${data2}\n${data3}`,
        "utf-8",
        (err) => {
          console.log("Your file has been written");
        }
      );
    });
  });
});
console.log("Will read file");
///////////////////////////////  QUESTION THREE  /////////////////////////
// Arrow functions in JavaScript have a different behavior for the this keyword. The value of this in arrow functions is bound to the enclosing scope. It means that arrow functions inherit the this value from the surrounding code block, where the arrow function is defined.
// Regular functions in JavaScript determine the value of this based on how the function is called. Depending on the function invocation context, it can be influenced by the way the function is called, whether it's a method, constructor, event handler, or a standalone function.

// Regular function:
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.sayHello(); // Output: Hello, John!

const greet = person.sayHello;
greet(); // Output: Hello, undefined!

// Arrow function:
const person2 = {
  name: "John",
  sayHello: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};

person.sayHello(); // Output: Hello, John!

const greet2 = person.sayHello;
greet(); // Output: Hello, John!

//////////////////////////////  QUESTION FOUR  ////////////////////////////
const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51]; // Here we are making a array of numbers

function filterNumbers(arr) {
  // Here we are making a function that will filter our numbers
  return arr.filter((num) => num % 3 === 0 && num % 6 === 0 && num % 9 !== 0); // Here we are returning numbers that are diviable by 3 and 6 but not by 9
}

const filteredNumbers = filterNumbers(numbers); // Here we call our function with our array as the parameter
console.log(filteredNumbers); // Here we console.log our function
/////////////////////////////  QUESTION FIVE  //////////////////////////////
// Async/await is a syntactic feature in JavaScript that allows for more readable and concise asynchronous code. It is built on top of promises and provides a way to write asynchronous code in a synchronous-like manner.
// Async/await is useful for handling asynchronous operations, such as making API requests, reading/writing files, and performing database queries, in a more straightforward way. It helps to avoid callback hell and simplifies error handling.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printWithDelay() {
  console.log("Start");
  await delay(2000);
  console.log("Delayed log");
  await delay(1000);
  console.log("End");
}

printWithDelay();
