function longest_substring_with_k_distinct(str,k){
  var start = 0;
  var distinct_strings = {};
  var longest_substring = Number.NEGATIVE_INFINITY;

  for(var i = 0;  i < str.length; i++){
    if(!(str[i] in distinct_strings)){
      distinct_strings[str[i]] = 0
    }
    distinct_strings[str[i]] += 1;

    while(Object.keys(distinct_strings).length > k){
       console.log(`distinct_strings ${i}.`, distinct_strings)
      distinct_strings[str[start]] -= 1;
      if(distinct_strings[str[start]] ===  0) delete distinct_strings[str[start]] 
      start++
    }
    
    longest_substring = Math.max(longest_substring, i - start + 1)
  }
 return longest_substring
}

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);

module.exports = longest_substring_with_k_distinct;