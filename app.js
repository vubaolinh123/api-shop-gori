const http = require('http');
const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get("/api/products", (req, res) => {
    const data = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" }
    ];
    res.json(data)
})

app.get("/api/users", (req, res) => {
    const data = [
        { id: 1, name: "Name A", email: "abc@gmail.com", address: "VietNam" },
        { id: 2, name: "Name B", email: "abcx@gmail.com", address: "HaNoi" },
        { id: 3, name: "Name C", email: "abcbx@gmail.com", address: "HaNoi" }
    ];
    res.send(data)

});

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy ở cổng ", PORT);
})