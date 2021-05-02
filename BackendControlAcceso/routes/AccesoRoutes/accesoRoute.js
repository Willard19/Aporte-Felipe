const express = require('express');
let router = express.Router();
const pool = require('../../models/dbm');
var moment = require('moment')
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
        const {id_tipo_visita,id_departamento,nombre,temperatura} = req.body;

        const hora_entrada=moment.utc().add('hours',-6).format('HH:mm:ss');
        const fecha=new Date();
        console.log(hora_entrada);
        console.log(fecha);
        const result = await access.insertOneEntrada(id_tipo_visita,id_departamento,nombre,temperatura,hora_entrada,fecha);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Insertar", "code":400})
    }
    
    })

    //Insertar salida
router.post("/exits",async(req,res) =>{
    try {
        const {nombre} = req.body;
        const hora_salida=moment.utc().add('hours',-6).format('HH:mm:ss');
        const fecha=new Date();
        console.log(hora_salida);
        console.log(fecha);
        const result = await access.insertOneSalida(nombre,hora_salida,fecha);
        res.status(200).json({'result': result,'code':200});
    } catch (ex) {
        console.log(ex);
        res.status(400).json({"message":"Error de Insertar", "code":400})
    }
})

module.exports =router;