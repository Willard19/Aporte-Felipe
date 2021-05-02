const pool = require('../dbm');

class visitasModel{


async getAll(){
    try {
        const result = await pool.query("SELECT desc_marca FROM sch_bienes.tbl_marcas; ");
        return result;
    } catch (ex) {
        console.log(ex);
        throw(ex);
    }
}

async insertOne(cod_marca, desc_marca){
    try {
        const result = pool.query("INSERT INTO sch_bienes.tbl_marcas (cod_marca, desc_marca, activo) VALUES($1,$2,$3) RETURNING *",
         [cod_marca, desc_marca, true]); 
        return result;
    } catch (ex) {
        console.log(ex);
        throw (ex);
    }
}



async updateState(id_marca, activo){
    try {
        const result = pool.query("UPDATE sch_bienes.tbl_marcas SET activo = $2 WHERE id_marca = $1 ",
         [id_marca, activo]); 
        return result;
    } catch (ex) {
        throw(ex);
    }

}

}
module.exports = visitasModel;

