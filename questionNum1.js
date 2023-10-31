/*
Question 1:- sum of all natural number from 1 to n
and without for loop here is a formula for finding a all natural number from i to n
the fromula num * (num+1) /2
*/
//with for loop
function sumNaturalNum(num) {
  sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumNaturalNum(5));
