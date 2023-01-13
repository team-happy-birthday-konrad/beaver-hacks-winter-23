import express from 'express';

const app = express();

app.get('/api/cppFunction', (req, res) => {
    const result = 0; //call your C++ function here
    //return the result
    res.json(result);
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
