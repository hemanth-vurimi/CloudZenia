const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="
            font-family: Arial, sans-serif; 
            text-align: center; 
            margin-top: 20%; 
            background: linear-gradient(90deg, #ff7eb3, #ff758c, #42a5f5); 
            color: white; 
            padding: 50px; 
            border-radius: 15px; 
            box-shadow: 0px 4px 15px rgba(0,0,0,0.2);">
            <h1 style="font-size: 60px; margin-bottom: 20px;">Hello from Microservice!</h1>
            <p style="font-size: 20px; margin-top: 10px;">Welcome to my page</p>
        </div>
    `);
});

app.listen(port, () => {
    console.log(`Microservice running at http://localhost:${port}`);
});

