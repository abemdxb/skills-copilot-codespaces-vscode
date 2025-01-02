// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Import router
const commentsRouter = require('./routes/comments');

// Use the router
app.use('/comments', commentsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});