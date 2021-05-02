CREATE TABLE sch_control_acceso."tbl.departamentos" (
	id_departamento serial NOT NULL,
	cod_departamento varchar(10) NULL,
	desc_departamento varchar(30) NULL,
	activo_departamento boolean NULL,
	CONSTRAINT tbl_departamentos_pk PRIMARY KEY (id_departamento)
);