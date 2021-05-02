const express = require('express');
const router = express.Router();

/*Integrar las rutas */
const accesoRoute = require('./AccesoRoutes/accesoRoute');
const tipoVisita = require('./AccesoRoutes/tipoVisitaRoute');
const departamento = require('./AccesoRoutes/departamentoRoute');
/*Como utilizar las rutas */

router.use('/access',accesoRoute);
//router.use('/visitors',tipoVisita);
//router.use('/departments',departamento);

module.exports = router;
