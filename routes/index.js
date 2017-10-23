var express = require('express');
var router = express.Router();

var scores = {}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/scores', function(req, res){
	res.json(scores);
});
router.post('/scores', function(req, res){
	console.log(req.body.name)
	let name = req.body.name
	if (name in scores){
		scores[name]++;
	}else{
		scores[name] = 1;
	}
	res.json(scores);
});
module.exports = router;
