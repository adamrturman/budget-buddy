const router = require('express').Router();

const {
    createStory
} = require('../../controllers/apiController');
const authMiddleware = require('../../middlewares/authorizationMiddleware');

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
router.use(authMiddleware);

router.get('/adam', (req, res) => {
    res.json({hi: 'there'});
});

router.post('/create-story', createStory);

module.exports = router;
