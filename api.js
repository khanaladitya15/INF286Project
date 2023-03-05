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
  async function makeHttpRequest(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(`Status: ${response.status}`);
      console.log(`Response: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  makeHttpRequest('https://api.weather.gov/gridpoints/TOP/39,84/forecast');