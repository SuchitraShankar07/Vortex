const jwt = require("jsonwebtoken");

module.exports = (role) => (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err || decoded.role !== role) return res.status(403).json({ error: "Forbidden" });
        req[role] = decoded;
        next();
    });
};
