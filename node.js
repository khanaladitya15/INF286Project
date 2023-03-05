
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

  const axios = require('axios'); // or use import if you're using ES6 modules

  axios.get('https://api.weather.gov/gridpoints/TOP/39,84/forecast')
    .then(response => {
      console.log(`Status: ${response.status}`);
      console.log(`Data: ${JSON.stringify(response.data)}`);
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    })