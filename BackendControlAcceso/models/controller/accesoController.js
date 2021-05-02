const pool = require('../dbm');

class accesoModel{


    async getAllEntrada(){
        try {
            const result = await pool.query("SELECT * FROM sch_control_acceso.tbl_acceso_entrada");
            return result;
        } catch (ex) {
            console.log(ex);
            throw(ex);
        }
    }

    async getAllSalidas(){
        try {
            const result = await pool.query("SELECT * FROM sch_control_acceso.tbl_acceso_salida");
            return result;
        } catch (ex) {
            console.log(ex);
            throw(ex);
        }
    }

    
    async insertOneEntrada(id_tipo_visita,id_departamento,nombre,temperatura,hora_entrada,fecha){
        try {
            const result = pool.query("INSERT INTO sch_control_acceso.tbl_acceso_entrada(id_tipo_visita, id_departamento, nombre, temperatura, hora_entrada, fecha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ",
            [id_tipo_visita,id_departamento,nombre,temperatura,hora_entrada,fecha]); 
            return result;
        } catch (ex) {
            console.log(ex);
            throw (ex);
        }
    }
    
    
    async insertOneSalida(nombre,hora_salida,fecha){
        try {
            const result = pool.query("INSERT INTO sch_control_acceso.tbl_acceso_salida(nombre, hora_salida, fecha) VALUES ( $1, $2, $3) RETURNING * ",
            [nombre,hora_salida,fecha]); 
            return result;
        } catch (ex) {
            console.log(ex);
            throw (ex);
        }
    }

    
    }
    module.exports = accesoModel;
    