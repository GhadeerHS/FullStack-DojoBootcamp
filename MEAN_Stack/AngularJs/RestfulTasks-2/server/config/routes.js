const tasks = require("../controllers/tasks.js");

module.exports = function(app){
    app.get("/tasks", function(req, res){
        tasks.index(req, res);
    });
    app.get('/tasks/:id', function(req, res) {
        task.find_task(req, res);
    });

}