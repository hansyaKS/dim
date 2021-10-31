var express = require('express');
var router = express.Router();
var path = require('path')
var db = require('../db/db')

db.all('SELECT * FROM MissionPlan', (err, rows) => {
  console.log(rows)
})






router.get('/', (req,res,next)=>{
    
    db.all('SELECT * FROM MissionPlan',(err ,rows)=>{
        if (err){
            console.log(err)
            return
          };
          res.json(rows)
    }
         
    )
})

router.get('/delete/:id', (req,res,next)=>{
    console.log(req.params.id)
    db.run('DELETE FROM MissionPlan WHERE planId = ?', 
    [req.params.id], 
    (err) => {
      if(err) {
        console.log(err)
        res.status(500).json({status: 'error'})
        return
      };
      res.status(200).json({status: 'Ok'})
      console.log(`Row(s) deleted`);
    })
})
module.exports = router;
