import express from 'express';
// import jwt from 'jsonwebtoken';

const config = {
  port: 3000
};

const app = express();

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
