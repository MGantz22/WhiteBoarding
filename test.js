//Question #1: Turning Strings to URLs

//URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

//You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion. Example

//Input: "Jasmine Ann Jones"

//Output: "Jasmine%20Ann%20Jones"

//let input = "Jasmine Ann Jones"

//-------------------------------------------------------------------------
//----ANSWER One-----------------------------------------------------------

function replaceSpace(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += "%20";
    } else {
      result += string[i];
    }
  }
  return result;
}

//-------------------------------------------------------------------------
//----ANSWER Two (simplified)-----------------------------------------------------------

function stringUrl(input) {
  let string = input.split(" ");
  let output = string.join("%20");
  return output; }


//-------------------------------------------------------------------------
//---- Recurrsion ANSWER -----------------------------------------------------------

    function replaceSpace(string){
    if(!string){
      return '';
    }
    if (string[0] === ' ') {
      return '%20' + replaceSpace(string.slice(1));
    }
    return string[0] + replaceSpace(string.slice(1));
    }