const express = require('express');
let router = express.Router();
const pool = require('../../models/dbm');
const acceso= require('../../models/controller/accesoController');
const access= new acceso();

router.get('/',async(req,res)=>{

try {
    const result = await access.getAllEntrada();
    res.status(200).json({'result': result,'code':200});
} catch (ex) {
    console.log(ex);
    res.status(400).json({"message":"No encontró ningún dato", "code":400})
}


})
//Fin de traer todos las marcas.

router.get('/exits',async(req,res)=>{

    try {
        const result = await access.getAllSalidas();
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"No encontró ningún dato", "code":400})
    }    
    
})



router.post("/",async(req,res) =>{
    try {
        const {cod_marca, desc_marca} = req.body;
        const result = await access.insertOne(cod_marca, desc_marca);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Insertar", "code":400})
    }
    
    })
//fin de insertar marca

router.put("/state/:id_marca",async(req,res) =>{
    try {
        const {id_marca}=req.params;
        const {activo} = req.body;
        const result = await access.updateState(id_marca, activo);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Actualizar", "code":400})
    }
    
    })


module.exports =router;