const express = require('express');
const server = express();

server.use(express.json());

server.get("/health", (req, res) => {
    return res.json("up");
})

server.listen(3456, () => console.log('listening on port 3456'));