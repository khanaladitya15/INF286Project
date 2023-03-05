function calcLargeNum(){
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
}
  return largest;
}

// Program to check whether the input is palindrome or not 
  function checkPalindrome(strData) {
    strData = strData.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    for (let i = 0; i < Math.floor(strData.length / 2); i++) {
      if (strData[i] !== strData[strData.length - 1 - i]) {
        console.log('Not a palindrome')
      }
    }
    console.log('It is a palindrome number.')
  }
  



