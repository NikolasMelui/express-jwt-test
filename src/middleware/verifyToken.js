/**
 * Verify JWT function
 *
 * TOKEN FORMAT
 * Authorization: Bearer <access_token>
 */

export default (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];

  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split token at the space and get the last array item
    const token = bearerHeader.split(' ')[1];
    // Set the token as request
    req.token = token;
    // Use next middleware argumant (next function)
    next();
  } else {
    res.sendStatus(403);
  }
};
