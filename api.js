const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 5000;
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('public'))


app.listen(port, () => {
    console.log("RUNNING ON", port);
})

app.get('/', (req, res) => {
    res.send('Server running');
});

app.get('/profile',(req,res)=>{
    const filePath = path.join(__dirname,"data.json");
    const data =fs.readFileSync(filePath, "utf-8"
    );
    res.json(JSON.parse(data));
  
    
})
