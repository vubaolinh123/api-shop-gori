import { Router } from 'express';
const router = Router()

const data = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" }
];

const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next()
    } else {
        console.log("YOU OUT");
    }
}

router.get("/products", checkAuth, (req, res) => {
    res.json(data)
})

router.post("/products", checkAuth, (req, res) => {
    data.push(req.body);
    res.json(data)
})

router.get("/products/:id", checkAuth, (req, res) => {
    res.json(data.filter(item => item.id == req.params.id))
})

router.delete("/products/:id", checkAuth, (req, res) => {
    res.json(data.filter(item => item.id != req.params.id))
})

router.put("/products/:id", checkAuth, (req, res) => {
    const result = data.map(item => item.id == req.params.id ? req.body : item)
    res.json(result)
})


export default router;