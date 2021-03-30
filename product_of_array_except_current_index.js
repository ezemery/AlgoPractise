//Given an array of positive numbers, find the product of each subarray of numbers which does not include the current number

function product_of_array_except_current_index(arr){
  var result = [];
  var temp_result = [];

  let product = arr.reduce((a,b) => {
    return a*b;
  })

  for(var i = 0; i < arr.length; i++){
    result.push((product / arr[i]))
  }

  return result;
}

const result = product_of_array_except_current_index([1,2,3,4])//[24, 12, 8, 6]
console.log(`Product of array result: ${result}`)
module.exports = product_of_array_except_current_index;