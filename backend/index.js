import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let counter = 0;

app.get('/', (req,res) => {
    res.send('Counter is: ' +Invalid status code: 1 counter);
});

app.post('/', (req, res) => {
    counter++;
    res.send('Counter was incremented');
});

app.listen('3000', () => {
    console.log('App listening on port 3000');
});