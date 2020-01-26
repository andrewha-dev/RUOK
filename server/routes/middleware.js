const requireAuth = (req, res, next) =>
  !req.user ? res.status(401).send({ message: 'User not authenticated' }) : next();

const checkAdminAccess = (req, res, next) =>
    !req.user || typeof(req.user.isAdmin) != 'undefined' ? res.status(401).send({ message: 'User not authenticated' }) : next();

module.exports = {
  requireAuth,
  checkAdminAccess,
};
