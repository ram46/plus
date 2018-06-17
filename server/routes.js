var controller = require('./controllers');
var router = require('express').Router();

router.get('/recent', controller.history.get);
router.post('/recent', controller.history.post);

router.options('/recent', controller.options);


router.get('/test', function(req, res){
  res.end('hello')
})

router.get('/', controller.home.get);

module.exports = router;

