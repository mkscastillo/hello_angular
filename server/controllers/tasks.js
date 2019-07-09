var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    show_all:function(req,res){
        Task.find({}, function(err,tasks){
            if(err){
                console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err})
            } else {
                console.log("tasks", tasks);
                res.json({data:tasks});
            }
        })
    },
    show_one:function(req,res){
        Task.findOne({_id:req.params.id}, function(err, task){
            if(err){
                console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err});
            } else {
                res.json({data:task});
            }
        })
    },
    create:function(req,res){
        console.log(req.body);
        var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
        task.save(function(err){
            if(err){
                console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success"});
            }
        })
    },
    update:function(req,res){
        console.log(req.body);
        Task.update({_id:req.params.id},{$set:{title: req.body.title, description: req.body.description, completed: req.body.completed}}, function(err,task){
            if(err){
                console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully updated"});
            }
        })
    },
    delete:function(req,res){
        Task.remove({_id:req.params.id}, function(err){
            if(err){
                console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully deleted"});
            }
        })
    }
}