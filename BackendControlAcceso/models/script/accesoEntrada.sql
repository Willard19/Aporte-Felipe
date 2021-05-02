
CREATE TABLE sch_control_acceso."tbl_acceso_entrada" (
	id_acceso_entrada serial NOT NULL,
	id_tipo_visita int4 NULL,
	id_departamento int4 NULL,
	nombre varchar(40) NULL,
	temperatura varchar(10) NULL,
	hora_entrada VARCHAR(20) NULL,
	fecha date NULL,
	CONSTRAINT tbl_acceso_pk PRIMARY KEY (id_acceso_entrada),
	CONSTRAINT tbl_acceso_fk FOREIGN KEY (id_tipo_visita) REFERENCES sch_control_acceso."tbl_tipo_visita"(id_tipo_visita),
	CONSTRAINT tbl_acceso_fk_1 FOREIGN KEY (id_departamento) REFERENCES sch_control_acceso."tbl_departamentos"(id_departamento)
);

