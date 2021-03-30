// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_subarray_with_given_sum = function(s, arr) {
  var min_length = Number.POSITIVE_INFINITY;
  var sum = 0;
  var start = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    while(sum >= s){
      min_length = Math.min(min_length, i - start + 1 )
      sum -= arr[start];
      start++;
      console.log("min_length", min_length)
      console.log("start", start)
      
    }
  }
  if(min_length === Number.POSITIVE_INFINITY){
    return 0
  }
  return min_length;
};

const result = smallest_subarray_with_given_sum(8, [3,4,1,1,6])

console.log(`The smallest subarray: ${result}`)

module.exports = smallest_subarray_with_given_sum;