const jwt = require("jsonwebtoken");

// Middleware to authenticate user
const authenticateToken = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.token;

  // If token is not found, return a 401 Unauthorized response
  if (!token) return res.sendStatus(401);

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // If token verification fails, return a 403 Forbidden response
    if (err) return res.sendStatus(403);

    // If verification is successful, add the user to the request object
    // and call next() to continue to the next middleware or route handler
    req.user = user;
    next();
  });
};

// // Use the authenticateToken middleware on routes that need protected
// app.get("/protected", authenticateToken, (req, res) => {
//   // If the request makes it to this route, that means the user is authenticated.
//   res.json({ msg: "You have accessed a protected route!" });
// });

module.exports = authenticateToken;
