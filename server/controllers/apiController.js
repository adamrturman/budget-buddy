
module.exports = {
    createStory: (req, res) => {
        console.log('I am this user in the create story route', req.user);
        res.json({hi: 'some text'});
    }
};
