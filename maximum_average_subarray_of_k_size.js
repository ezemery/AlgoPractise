function maximum_average_subarray_of_k_size(k,arr){
  var average = Number.NEGATIVE_INFINITY;
  var start = 0;
  var sum = 0;

  for(var i=0; i < arr.length;i++){
    sum += arr[i];
    
    if(i >= k-1){
      console.log("sum",sum)
      average = Math.max(average,sum/k)
      sum -= arr[start];
      start++;
    }
  }

  return average;
}

const result = maximum_average_subarray_of_k_size(3, [2,1,5,1,3,2]);

console.log(`Averages of subarrays of size K: ${result}`);

module.exports = maximum_average_subarray_of_k_size