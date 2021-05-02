const express = require('express');
let router = express.Router();
const departamento= require('../../models/controller/departamentoController');
const department= new departamento();

router.get('/',async(req,res)=>{
try {
    const result = await department.getAll();
    res.status(200).json({'result': result,'code':200});
} catch (ex) {
    console.log(ex);
    res.status(400).json({"message":"No encontró ningún dato", "code":400})
}


})
//Fin de traer todos los departamentos

router.post("/",async(req,res) =>{
    try {
        const  {cod_departamento,desc_departamento} = req.body;
         const result = await department.insertOne(cod_departamento,desc_departamento);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Insertar", "code":400})
    }
    
    })
//fin de insertar departamnto

router.put("/state/:id_departamento",async(req,res) =>{
    try {
        const {id_departamento}=req.params;
        const {activo_departamento} = req.body;
        const result = await department.updateState(id_departamento, activo_departamento);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Actualizar", "code":400})
    }
    
    })
    //desactivar departamento


module.exports =router;