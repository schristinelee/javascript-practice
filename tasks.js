// // setTimeout functions
// function firstTask() {
//   console.log("first task done!");
// }
// function secondTask() {
//   console.log("second task done!");
// }

// setTimeout(firstTask, 2000);
// secondTask();

// // Without methods:

// setTimeout(function () {
//   console.log("first task done!");
// }, 2000);

// console.log("second task done!");

// // Individual callbacks:
// setTimeout(function () {
//   console.log("first task done!");
// }, 2000);

// setTimeout(function () {
//   console.log("second task done!");
// }, 4000);

// setTimeout(function () {
//   console.log("third task done!");
// }, 6000);

// nested callbacks:
setTimeout(function () {
  console.log("first task done!");
  setTimeout(function () {
    console.log("second task done!");
    setTimeout(function () {
      console.log("third task done!");
    }, 2000);
  }, 2000);
}, 2000);
