var modelPrj = require("../models/prj_models");
class ApiPrjController {
  index(req, res, next) {
    modelPrj.list((data) => {
      res.json(data);
    });
  }
  getPrjbyId(req, res) {
    let id = req.params.id;
    modelPrj.read(id,  (data)=> {
      res.json(data);
    });
  }

    addNewPrj(req, res) {
    let data = req.body;
    modelPrj.create(data,  ()=> {
      res.json({ pp: "Created !" });
    });
  }


    fixPrj(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelPrj.update(id, data,  ()=> {
      res.json({ pp: "Update sucssesfully " });
    });
  }
  deletePrj(req, res) {
    let data = req.body;
    let id = req.params.id;
    modelPrj.delete(id, data,  ()=> {
      res.json({ pp: "Delete sucssesfully " });
    });
  }


  
//   PrjInCate(req, res) {
//     let id = req.params.id;
//     modelPrj.getPrjbyCate(id,  (data)=> {
//       res.json(data);
//     });
//   }



}

module.exports = new ApiPrjController();
