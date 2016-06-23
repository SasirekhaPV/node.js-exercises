module.exports = function makeCalculator() {
    var result = 0;
    return {
        getNumber: function(num) {
          return result;
        },
        add: function(num) {
          result = result + num;
        },
        subtract: function(num) {
          result = result - num;
        },
        times: function(num) {
          result = result * num;
        }
      };
    };

var calc = makeCalculator();

console.log(calc.getNumber(0)); // outputs 0
calc.add(4);
console.log(calc.getNumber()); // outputs 4
calc.subtract(2);
console.log(calc.getNumber()); // outputs 2
calc.times(3);
console.log(calc.getNumber()); // outputs 6
