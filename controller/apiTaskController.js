var modelTask = require("../models/task_models");
class ApiTaskController {
  index(req, res, next) {
    modelTask.list((data) => {
      res.json(data);
    });
  }

    getTaskbyId(req, res) {
    let id = req.params.id;
    modelTask.read(id,  (data)=> {
      res.json(data);
    });
  }
    addNewTask(req, res) {
    let data = req.body;
    modelTask.create(data,  ()=> {
      res.json({ pp: "Created !" });
    });
  }

    fixTask(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelTask.update(id, data,  ()=> {
      res.json({ pp: "Update sucssesfully " });
    });
  }
  deleteTask(req, res) {
   
    let id = req.params.id;
    modelTask.delete(id,   ()=> {
      res.json({ pp: "Delete sucssesfully " });
    });
  }


  
//   TaskInCate(req, res) {
//     let id = req.params.id;
//     modelTask.getTaskbyCate(id,  (data)=> {
//       res.json(data);
//     });
//   }



}

module.exports = new ApiTaskController();
