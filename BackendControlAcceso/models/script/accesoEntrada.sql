CREATE TABLE sch_control_acceso."tbl.acceso_entrada" (
	id_acceso_entrada serial NOT NULL,
	id_tipo_visita int4 NULL,
	id_departamento int4 NULL,
	nombre varchar(40) NULL,
	temperatura int4 NULL,
	hora_entrada TIMESTAMP NULL,
	fecha date NULL,
	CONSTRAINT tbl_acceso_pk PRIMARY KEY (id_acceso),
	CONSTRAINT tbl_acceso_fk FOREIGN KEY (id_tipo_visita) REFERENCES sch_control_acceso."tbl.tipo_vista"(id_tipo_visita),
	CONSTRAINT tbl_acceso_fk_1 FOREIGN KEY (id_departamento) REFERENCES sch_control_acceso."tbl.departamentos"(id_departamento)
);

