export default function isLoggedIn(req, res, next) {
  if (req.user) return next();
  res.status(403).send({ message: "You need to be logged in." });
}
