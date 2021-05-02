const pool = require('../dbm');

class deptoModel{


    async getAll(){
        try {
            const result = await pool.query("SELECT * FROM sch_control_acceso.tbl_departamentos ");
            return result;
        } catch (ex) {
            console.log(ex);
            throw(ex);
        }
    }
    
    async insertOne(cod_departamento,desc_departamento){
        try {
            const result = pool.query("INSERT INTO sch_control_acceso.tbl_departamentos(cod_departamento, desc_departamento, activo_departamento) VALUES ($1, $2, $3) RETURNING * ",
             [cod_departamento, desc_departamento, true]); 
            return result;
        } catch (ex) {
            console.log(ex);
            throw (ex);
        }
    }
    
    
    async updateState(id_departamento, activo_departamento){
        try {
            const result = pool.query("UPDATE sch_control_acceso.tbl_departamentos SET activo_departamento = $2 WHERE id_departamento = $1 ",
             [id_departamento, activo_departamento]); 
            return result;
        } catch (ex) {
            throw(ex);
        }
    
    }
    
    }
    module.exports = deptoModel;
    