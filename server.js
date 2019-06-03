const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send({ response: 'API Beleza na Web' });
});

app.use(express.json());
app.use(cors());
app.use('/api', require('./src/routes'));

app.listen(8000, () => console.log(`Server running on port`, port));


