import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let counter = 0;

app.get('/', (req,res) => {
    res.send(`{ "counter": ${counter} }`);
});

app.post('/', (req, res) => {
    counter++;
    res.send('Counter was incremented');
});

app.post('/dec', (req, res) => {
    counter--;
    res.send('Counter was decremented');
});

app.listen('3000', () => {
    console.log('App listening on port 3000');
});