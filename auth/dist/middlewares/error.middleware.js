export const errorHandler = (err, req, res, next) => {
    console.error("Gateway Error:", err.message || err);
    return res.status(500).json({ error: "Internal Gateway Error" });
};
//# sourceMappingURL=error.middleware.js.map