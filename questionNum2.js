/**
 question 2 :- sum of digits of a number
 like this suppose our number is 85763 
 than we have to do like this 8+5+7+6+3 = 29 
 */
function sumDigitsNum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10; // here 2345%10 = 5
    num = Math.floor(num / 10); // 234
  }
  return sum;
}
console.log(sumDigitsNum(12345));
