/*
'3[a]2[bc]' // Output: 'aaabcbc'
'3[a2[c]]' // Output: 'accaccacc'
'2[abc]3[cd]ef' // Output: 'abcabccdcdcdef'
'3[a4[3[p]2[cs2[a]]]]'; // Output: 'apppcsaacsaapppcsaacsaapppcsaacsaapppcsaacsaaapppcsaacsaapppcsaacsaapppcsaacsaapppcsaacsaaapppcsaacsaapppcsaacsaapppcsaacsaapppcsaacsaa'
*/

function getWord(str) {
    let outputCharacters = str.split('');
  
    let i = 0;
    while (outputCharacters.includes('[')) {
      let openBraceIndex = null;
      let closingBraceIndex = null;
  
      // find the last open brace
      for (i = 0; i <= outputCharacters.length; i++) {
        if (outputCharacters[i] === '[') {
          openBraceIndex = i;
        }
      }
      // find the closing brace just after the open brace
      for (let j = outputCharacters.length - 1; j > openBraceIndex; j--) {
        if (outputCharacters[j] === ']') {
          closingBraceIndex = j;
        }
      }
  
      // find the multiplier
      let pointer = openBraceIndex - 1;
      let multiplier = '';
      let multiplierIndex = pointer;
      while (!!Number(outputCharacters[pointer])) {
        multiplier = outputCharacters[pointer] + multiplier;
        multiplierIndex = pointer;
        pointer--;
      }
  
      const innerCharacters = [
        ...outputCharacters.slice(openBraceIndex + 1, closingBraceIndex),
      ];
  
      let result = innerCharacters.join('').repeat(+multiplier);
      outputCharacters = [
        ...outputCharacters.slice(0, multiplierIndex),
        result,
        ...outputCharacters.slice(closingBraceIndex + 1),
      ];
    }
  
    return outputCharacters.join('');
  }
  
  var str = '3[a]2[bc]';
  // var str = '3[a]bcbc';
  // var str = '2[abc]3[cd]ef';
  // var str = '3[a2[c]]';
  // var str = '3[a4[3[p]2[cs2[a]]]]';
  // aaabcbc
  console.log(getWord(str)); // aaabcbc
  