const express = require('express');
const cors = require("cors");
const port = 5000;
const app = express();
const middleware = require('./middleware');
app.use(cors());
app.get('/public', (req, res) => {
    res.json(
        {
            message: "Dados públicos"
        }
    );
})
app.get('/private', middleware.checkToken, (req, res) => {
    res.json(
        {
            message: "Dados privados"
        }
    );
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});