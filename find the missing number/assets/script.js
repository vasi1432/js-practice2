//first of all we have to add the sum of all the  values in array
//then we have to calculate the sum upto n
//then in maths we have an formula to get the sum of all the element upto N
//then we have to substract
//the differrence is the remaining number

N = 5;
arr = [1, 2, 3, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
const sum2 = (N * (N + 1)) / 2;
const result = sum2 - sum;
console.log(result);
