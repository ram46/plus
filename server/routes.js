var controller = require('./controllers');
var router = require('express').Router();


// router.get('/stats', controller.activities.get);
// router.post('/stats', controller.activities.post);

// // router.options('/recent', controller.options);


// router.get('/users', controller.users.get)
// router.post('/users', controller.users.post)

router.get('/activity', controller.activities.get)
router.post('/activity', controller.activities.post)
router.post('/save', controller.save.post)

router.get('/stats', controller.stats.get)

router.get('/test', function(req, res){
  res.end('hello')
})


module.exports = router;

