
const fs = require('fs');
function lfid(path) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.error(err);
      return;
    } 
    files.forEach(file => {
      console.log(file);
    });
  });
}
lfid();

function readAsync(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
readAsync('./sample.text', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });

  const axios = require('axios');

  async function makeHttpRequest(url) {
    try {
      const response = await axios.get(url);
      console.log(`Status code: ${response.status}`);
      console.log(`Response data: ${response.data}`);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  makeHttpRequest('https://api.weather.gov/gridpoints/TOP/40,74/forecast')
    .then(() => console.log('Request complete'))
    .catch((error) => console.error(`Request failed: ${error.message}`));