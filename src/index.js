import express from 'express';
import jwt from 'jsonwebtoken';
import verifyToken from './middleware/verifyToken';

const config = {
  port: 3000
};

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: "Hello, i'm an API"
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  // Verify the JWT
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      console.log(err);

      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post was created',
        authData
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  // Mock the user
  const user = {
    id: 1,
    username: 'nikolasmelui',
    email: 'slak@samaradom.ru'
  };

  jwt.sign(user, 'secretkey', { expiresIn: '30m' }, (err, token) => {
    res.json({ token });
  });
});

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
