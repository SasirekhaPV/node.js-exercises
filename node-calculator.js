// 2 number calculator
// var firstNum = parseInt(process.argv[2]);
//
// var secondNum = parseInt(process.argv[3]);
//
// var sum = firstNum + secondNum;
//
// console.log('Sum is ' + sum);

// multiple numbers passed in
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);

}
console.log(sum);
