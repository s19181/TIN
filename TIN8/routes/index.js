import Express from "express"

const app = Express();
const port = 3000;

app.get("/hello", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => console.log("listening to port " + port));