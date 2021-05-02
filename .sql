
CREATE TABLE sch_control_acceso."tbl.tipo_visita" (
	id_tipo_visita serial NOT NULL,
	desc_tipo_visita varchar(20) NULL,
	activo_tipo_visita boolean NULL,
	CONSTRAINT newtable_pk PRIMARY KEY (id_tipo_visita)
);

INSERT INTO sch_control_acceso."tbl.tipo_visita"
(desc_tipo_visita, activo_tipo_visita)
VALUES('Visitante', true);
INSERT INTO sch_control_acceso."tbl.tipo_visita"
(desc_tipo_visita, activo_tipo_visita)
VALUES('Funcionario', true);


CREATE TABLE sch_control_acceso."tbl.departamentos" (
	id_departamento serial NOT NULL,
	cod_departamento varchar(10) NULL,
	desc_departamento varchar(30) NULL,
	activo_departamento boolean NULL,
	CONSTRAINT tbl_departamentos_pk PRIMARY KEY (id_departamento)
);


CREATE TABLE sch_control_acceso."tbl.acceso_salida" (
	id_acceso_salida serial NOT NULL,
	nombre varchar(40) NULL,
	hora_salida TIMESTAMP NULL,
	fecha date NULL
);


CREATE TABLE sch_control_acceso."tbl.acceso_entrada" (
	id_acceso_entrada serial NOT NULL,
	id_tipo_visita int4 NULL,
	id_departamento int4 NULL,
	nombre varchar(40) NULL,
	temperatura int4 NULL,
	hora_entrada TIMESTAMP NULL,
	fecha date NULL,
	CONSTRAINT tbl_acceso_pk PRIMARY KEY (id_acceso_entrada),
	CONSTRAINT tbl_acceso_fk FOREIGN KEY (id_tipo_visita) REFERENCES sch_control_acceso."tbl.tipo_visita"(id_tipo_visita),
	CONSTRAINT tbl_acceso_fk_1 FOREIGN KEY (id_departamento) REFERENCES sch_control_acceso."tbl.departamentos"(id_departamento)
);


