
CREATE TABLE sch_control_acceso."tbl.tipo_visita" (
	id_tipo_visita serial NOT NULL,
	desc_tipo_visita varchar(20) NULL,
	activo_tipo_visita boolean NULL,
	CONSTRAINT newtable_pk PRIMARY KEY (id_tipo_visita)
);


INSERT INTO sch_control_acceso."tbl.tipo_vista"
(desc_tipo_visita, activo_tipo_visita)
VALUES('Visitante', true);
INSERT INTO sch_control_acceso."tbl.tipo_vista"
(desc_tipo_visita, activo_tipo_visita)
VALUES('Funcionario', true);