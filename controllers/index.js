// Modules
const router = require('express').Router();
const apiRoutes = require('./api-routes');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).json.end();
});

module.exports = router;