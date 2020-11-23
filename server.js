const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);


app.use(express.static('build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4003;

const server = http.listen(port, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});
