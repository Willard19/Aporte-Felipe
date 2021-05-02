const express = require('express');
let router = express.Router();
const visitors= require('../../models/controller/tipoVisitaController');
const visit= new visitors();

router.get('/',async(req,res)=>{
try {
    const result = await visit.getAll();
    res.status(200).json({'result': result,'code':200});
} catch (ex) {
    console.log(ex);
    res.status(400).json({"message":"No encontró ningún dato", "code":400})
}


})
//Fin de traer todos las tipo_visitas.

router.post("/",async(req,res) =>{
    try {
        const  {desc_tipo_visita} = req.body;
        const result = await visit.insertOne(desc_tipo_visita);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Insertar", "code":400})
    }
    
    })
//fin de insertar tipo_visita

router.put("/state/:id_tipo_visita",async(req,res) =>{
    try {
        const {id_tipo_visita}=req.params;
        const {activo} = req.body;
        const result = await visit.updateState(id_tipo_visita, activo);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Actualizar", "code":400})
    }
    
    })


module.exports =router;