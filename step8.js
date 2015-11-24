"use strict";

function somethingAsync(callback){
  setTimeout(function(){
    var data = "Hello World from async function";
    callback(data);
  }, 1000);
}

somethingAsync(function(data){
  console.log(data)
});