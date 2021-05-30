const express = require('express');
const app = express();
const helmet = require('helmet');
const notes = require('./routes/notes');
const cors = require('cors');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/notes', notes);

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})