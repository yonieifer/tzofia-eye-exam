export default (req, res, next) => {
    const user = req.body;
    if (!user.role === "admin") {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
    next()


};