const db = require('../db')

exports.create = function(req, res) {
  var name=req.body.nom;
  var firstname=req.body.prenom;
  var old=req.body.age;
  db.query("INSERT INTO `eleve` (nom,prenom,age) VALUES ('"+name+"','"+firstname+"','"+old+"')",(err, result)=>{
      if(err) throw err;
          console.log('insertion avec succes');
      });
  res.send("insertion avec succes");
};

exports.read = function(req, res) {
  db.query('SELECT * from eleve',(error, results) =>{
		if (error) throw error;
		res.send(results);
	});
};

exports.update = (req,res)=>{
  var name=req.body.nom;
  var firstname=req.body.prenom;
  var old=req.body.age;
  var ide = req.body.id
    db.query("UPDATE `eleve` SET nom = '"+name+"',prenom = '"+firstname+"',age='"+old+"' WHERE id = "+ide+"",(error,result)=>{
      if (error) throw error;
      res.send('modification avec succes');
    })
}

exports.delete = function(req, res) {
  var ide=req.params.id
  db.query("DELETE FROM eleve WHERE id = "+ide+"", function (err, results) {
             if(err) throw err;
             res.send('suppression de id ='+ide+' avec succes')
         })
};