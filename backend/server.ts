import express from 'express';

const cppWrapper = require('./cppWrapper');

const app = express();


app.get('/api/cppFunction', (req, res) => {
    const input = req.query.input;
    const result = cppWrapper.cppFunction(input);
    res.json(result);
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
