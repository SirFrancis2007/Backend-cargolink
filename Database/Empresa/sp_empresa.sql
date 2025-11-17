/*-----------------------------------------------*/
-- Store Procedures Tabla Empresa
/*-----------------------------------------------*/

DELIMITER $$
DROP procedure IF EXISTS sp_Empresa_insertar $$
CREATE PROCEDURE sp_Empresa_insertar (OUT xidEmpresa INT, IN xNombre varchar(45), IN xContrasena VARCHAR(64), IN xDireccion varchar(45), IN xEmail VARCHAR(100))
BEGIN
	INSERT INTO Empresa (Nombre, Contrasena, Direccion, Email)
	VALUES (xNombre, SHA2(xContrasena, 256), xDireccion, xEmail);
	set xidEmpresa = last_insert_id();
END $$

/*-----------------------------------------------*/
-- Store Procedure para el logueo de la Empresa
/*-----------------------------------------------*/

DELIMITER $$
DROP PROCEDURE IF EXISTS sp_LoginEmpresa $$
CREATE PROCEDURE sp_LoginEmpresa(IN xEmail VARCHAR(100),IN xContrasena VARCHAR(255))
BEGIN
    IF EXISTS (SELECT 1 FROM Empresa WHERE Email = xEmail AND Contrasena = SHA2(xContrasena, 256)) THEN
        SELECT idEmpresa, Nombre, Direccion, Email
        FROM Empresa
        WHERE Email = xEmail AND Contrasena = SHA2(xContrasena, 256);
    END IF;
END $$
DELIMITER ;