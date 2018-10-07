import express from 'express';
// import jwt from 'jsonwebtoken';

const config = {
  port: 3000
};

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: "Hello, i'm an API"
  });
});

app.post('/api/posts', (req, res) => {
  res.json({
    message: 'Post was created...'
  });
});

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
