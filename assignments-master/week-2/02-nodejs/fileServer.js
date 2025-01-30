/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();

// const path = require("path");
// const fs = require("fs");
// const express = require("express");
// const app = express();
// app.listen(3000);

// app.get("/files",(req,res) =>{
//   // res.send("hello");
//   const filePath = path.join(__dirname,'./files/');
//   fs.readdir(filePath,"utf-8",(err,data) =>{
//     if(err){
//       return res.status(500).send('File not found in the directory');
//     }
//     res.json(data);
//   });
// });

// app.get("/file/:filename",(req,res) =>{
//   const fileName = path.join(__dirname ,'./files/',req.params.filename);
//   fs.readFile(fileName,'utf-8',(err,data)=>{
//     if(err){
//       return res.status(404).send('file is not found')
//     }
//     res.send(data);
//   });
// });

// app.get('/file/:filename', function (req, res) {
//     const filepath = path.join(__dirname, './files/', req.params.filename);
//     fs.readFile(filepath, 'utf8', (err, data) => {
//     if (err) {
//         return res.status(404).send('File not found');
//     }
//     res.send(data);
//   });
// });


const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const filesDirectory = path.join(__dirname, 'files');

// Endpoint to list all files in the `./files/` directory
app.get('/files', (req, res) => {
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read directory' });
    }
    res.status(200).json(files);
  });
});

// Endpoint to get content of a specific file by name
app.get('/file/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(filesDirectory, fileName);
  
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
            if (err.code === 'ENOENT') {
              return res.status(404).send('File not found');
            }
            return res.status(500).send('Error reading the file');
          }
          res.status(200).send(content);
        });
      });
      
      // Handle undefined routes
      app.use((req, res) => {
        res.status(404).send('Not Found');
      });
      
      // Start the server
      const PORT = 3000;
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
      
module.exports = app;