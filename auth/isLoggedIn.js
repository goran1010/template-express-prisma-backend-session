export default function isLoggedIn(req, res, next) {
  if (req.user) return next();
  res.status(403).send("You need to be logged in.");
}
