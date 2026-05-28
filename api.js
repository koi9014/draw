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

app.get('/profile', (req, res) => {
    const filePath = path.join(__dirname, "data.json");
    const data = fs.readFileSync(filePath, "utf-8"
    );
    res.json(JSON.parse(data));


})


app.put('/profile/:id', (req, res) => {
    const id = req.params.id;
    const { style, money } = req.body;
    const filePath = path.join(__dirname, "data.json");
    const data = fs.readFileSync(filePath, "utf-8"
    );
    const todos = JSON.parse(data || '[]');
    const todo = todos.find(item => item.id == id);

    if (!todo) {
        return res.status(404).json({ message: "not found" });
    }

    todo.style = style;
    todo.money = money;

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

    res.json(todo);
})

app.post('/profile', (req, res) => {
    const filePath = path.join(__dirname, "users.json");
    const data = fs.readFileSync(filePath, "utf-8"
    );
    const users = JSON.parse(data)
    const { email, password } = req.body
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
    res.json({
      success: true,
      message: "登入成功"
    })
  } else {
    res.json({
      success: false,
      message: "帳號或密碼錯誤"
    })
  }
})