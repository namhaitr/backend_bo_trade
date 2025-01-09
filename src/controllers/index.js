const getHome = (req, res) => {
    res.json({ message: 'Welcome to my Node.js API' });
};

module.exports = { getHome };
