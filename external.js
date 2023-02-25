function calcLargeNum(){
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
}
  return largest;
}
function eventHandler(){
    const apiKey = '4ef5aa52aef97418172602dd43bfcc94';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const responseElement = document.getElementById('response');
        responseElement.innerHTML = `The temperature in London is ${data.main.temp} Kelvin.`;
      })
      .catch(error => console.error(error));
  }

