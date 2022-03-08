const http = require('http');
const express = require('express')
const app = express();

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

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy ở cổng ", PORT);
})