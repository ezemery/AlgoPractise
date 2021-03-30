// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// function find_averages_of_subarrays(k, arr){
//   results = [];
//   for(var i=0; i < arr.length - k + 1; i++){
//     sum = 0
//     for(var j=i; j < k+i; j++){
//       sum += arr[j];
//     }
//    results.push(sum/k)
//   }
//   return results
// }

function find_averages_sliding_window(k,arr){
  var results=[];
  var start = 0;
  var sum = 0
  for(var end=0; end <arr.length;  end++){
    sum += arr[end];

    if(end >= k - 1){
      results.push(sum/k)
      sum -= arr[start]
      start += 1
    }

  }

  return results;
}
const result = find_averages_sliding_window(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
