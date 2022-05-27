var modelUser = require("../models/users_models");
class ApiUserController {
  index(req, res, next) {
    modelUser.list((data) => {
      res.json(data);
    });
  }
  
 
  addNewUser(req, res) {
    let data = req.body;
    modelUser.create(data,  ()=> {
      res.json({ pp: "Created !" });
    });
  }
  
  getUserbyId(req, res) {
    let id = req.params.id;
    modelUser.read(id,  (data)=> {
      res.json(data);
    });
  }
  fixUser(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelUser.update(id, data,  ()=> {
      res.json({ pp: "Update sucssesfully " });
    });
  }
  deleteUser(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelUser.delete(id, data,  ()=> {
      res.json({ pp: "Delete sucssesfully " });
    });
  }
}

module.exports = new ApiUserController();
