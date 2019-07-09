var tasks = require('../controllers/tasks.js');

module.exports = function(app){
    app.get('/', function(req,res){
        tasks.show_all(req,res);
    });
    app.get('/:id', function(req,res){
        tasks.show_one(req,res);
    });
    app.post('/new', function(req,res){
        tasks.create(req,res);
    });
    app.put('/update/:id', function(req,res){
        tasks.update(req,res);
    });
    app.delete('/delete/:id', function(req,res){
        tasks.delete(req,res);
    });
}