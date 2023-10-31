/**
 * question 3 :- count the number of digits of a number
 * 23456
 */
function countNumDigits(num) {
  num = Math.abs(num);
  count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
console.log(countNumDigits(-2345));
