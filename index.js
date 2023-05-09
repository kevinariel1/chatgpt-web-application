const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(__dirname + '/client')); // Serves resources from client folder

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
