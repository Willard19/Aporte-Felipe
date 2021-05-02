const pool = require('../dbm');

class visitasModel{


async getAll(){
    try {
        const result = await pool.query("SELECT id_tipo_visita, desc_tipo_visita, activo_tipo_visita FROM sch_control_acceso.tbl_tipo_visita ");
        return result;
    } catch (ex) {
        console.log(ex);
        throw(ex);
    }
}

async insertOne(desc_tipo_visita){
    try {
        const result = pool.query("INSERT INTO sch_control_acceso.tbl_tipo_visita(desc_tipo_visita, activo_tipo_visita) VALUES ($1, $2) RETURNING * ",
         [desc_tipo_visita, true]); 
        return result;
    } catch (ex) {
        console.log(ex);
        throw (ex);
    }
}



async updateState(id_tipo_visita, activo_tipo_visita){
    try {
        const result = pool.query("UPDATE sch_control_acceso.tbl_tipo_visita SET activo_tipo_visita = $2 WHERE id_tipo_visita = $1 ",
         [id_tipo_visita, activo_tipo_visita]); 
        return result;
    } catch (ex) {
        throw(ex);
    }

}

}
module.exports = visitasModel;

