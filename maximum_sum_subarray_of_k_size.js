// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function maximum_sum_subarray_of_k_size(k, arr){
    var max = Number.NEGATIVE_INFINITY;
    var sum = 0; 
    var start = 0;

    for(var i = 0; i < arr.length; i++){
      sum += arr[i];

      if(i >= k - 1){
        if(sum > max){
          max = sum;
        }
        sum -= arr[start];
        start++;
        console.log("sum",sum)
        console.log("start",start)
      }

    }

    return max;
}

const result = maximum_sum_subarray_of_k_size(3, [2,1,5,1,3,2]);

console.log(`Averages of subarrays of size K: ${result}`);

module.exports = maximum_sum_subarray_of_k_size
