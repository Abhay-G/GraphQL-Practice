import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Up and running with graph ql');
});

app.listen(8080, () => {
    console.log('Server running at 8080');
});
