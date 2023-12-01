// Create web server
// 1. Install express
// 2. Create server
// 3. Create route
// 4. Start the server

// 1. Install express
// npm install express

// 2. Create server
const express = require('express');
const app = express();

// 3. Create route
app.get('/',function(req,res){
    res.send('Hello World');
});

// 4. Start the server
app.listen(3000,function(){
    console.log('Server is running on port 3000');
});