const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/api/products") {
        const data = [
            {
                id: 1, name: "Product A"
            },
            {
                id: 2, name: "Product B"
            }
        ];
        res.end(JSON.stringify(data))
    } else if (url === "/api/posts") {
        console.log("API POST");
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>Home Page</h1></body></html>");
        res.end()
    }
})

const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server của bạn đang chạy ở cổng ", PORT);
})