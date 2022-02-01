// server/index.js
const path = require('path');
const express = require('express');
const clientPath = path.join(__dirname, '../client/build');

const app = express()
const port = 3000
// Have Node serve the files for our built React app
app.use(express.static(clientPath));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(clientPath, 'index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})