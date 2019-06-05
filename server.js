const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send({ response: 'API Beleza na Web' });
});

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://admin:admin123@ds133137.mlab.com:33137/beleza_na_web', { useNewUrlParser: true });
requireDir('./src/models/');

app.use('/api', require('./src/routes'));

app.listen(port, () => console.log(`Server running on port`, port));


