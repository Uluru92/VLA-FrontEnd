const express = require("express")

const app = express();
const port = 3015;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json())

app.listen(port, () => {
    console.log("Se ha refrescado el sitio en el puerto:", port)
})

