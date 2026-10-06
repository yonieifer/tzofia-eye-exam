export default (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.user = decoded;

    // return res.status(403).json({ message: 'Invalid or expired token' });
};