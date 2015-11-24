"use strict";
var ASQ = require("asynquence-contrib");

function helloAsync(){
  return new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("Hello"); }, 500);
  });
}

function worldAsync(){
  return new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("World"); }, 200);
  });
}

ASQ().runner(function *main(){
  var hello = yield helloAsync();
  console.log(hello); // Hello
  var world = yield worldAsync();
  console.log(hello + " " + world); // Hello World
});