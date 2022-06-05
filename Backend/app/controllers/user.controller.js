exports.allAccess = (req, res) => {
    res.status(200).send("Public access.")
};
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin access.")
}