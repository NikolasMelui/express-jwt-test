import express from 'express';
import jwt from 'jsonwebtoken';

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

app.post('/api/login', (req, res) => {
  // Mock the user
  const user = {
    id: 1,
    username: 'nikolasmelui',
    email: 'slak@samaradom.ru'
  };
  jwt.sign(user, 'secretkey', (err, token) => {
    res.json({ token });
  });
});

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
