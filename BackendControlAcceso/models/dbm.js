/*
@author Felipe Toledo
    Conexion a postgreSQL
*/
const Pool = require('pg').Pool;

const pool = new Pool({
user: "ga_admon",
password: "GA2021*",
host: "localhost",
port: 5432,
database:"dbadmon"
});

module.exports =pool;

