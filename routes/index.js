var express = require('express');
var router = express.Router();
var path = require('path')
var db = require('../db/db')

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '..', 'htmls', 'index.html'));
});

router.post('/', function(req,res,next){
  db.run('INSERT INTO MissionPlan(planName, g3wp) VALUES (?, ?)',[req.body.namaMisi, req.body.GeoJSON],
  (err) =>{ 
    if (err){
      console.log(err)
      return
    }
    res.status(200).json({status: 'OK'})
  })
});
module.exports = router;