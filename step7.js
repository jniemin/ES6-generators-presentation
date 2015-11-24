"use strict";
function *gen1(){
  console.log("gen1");
  yield 1;
  yield *gen2();
  yield 3;
}

function *gen2(){
  console.log("gen2");
  yield 2;
}

var iter = gen1();
console.log(iter.next().value); // gen1
                                // 1
console.log(iter.next().value); // gen2
                                // 2
console.log(iter.next().value); // 3