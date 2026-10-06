export default (req, res, next) => {
    const user = req.user;
    if (user.role !== "admin") {
        return res.status(403).json({ message: 'Access denied: admin role required' });
    }
    next()
};