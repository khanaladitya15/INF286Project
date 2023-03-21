
// neccessary modules
const fs = require('fs');
const request = require('request');

// Function to list all files 
function listAllFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
      if (err) {
          console.error(err);
          return;
      }
      console.log(files);
  });
}

// Function to read the contents of a file 
function readAllFile(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
          console.error(err);
          return;
      }
      console.log(data);
  });
}

  function makeRequest(url) {
    request(url, (err, res, body) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(`Response: ${body}`);
    });
}

// Calling all functions 
listAllFiles('./'); // lists all files 
readAllFile('./sample.txt'); // reads the contents of sample.txt file
makeRequest('https://www.youtube.com/watch?v=dQw4w9WgXcQ');