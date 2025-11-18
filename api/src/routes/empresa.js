import express, { Router } from "express";
import { EmpresaController } from "../controllers/empresa.js";
import Empresa from "../models/empresa.js";

const router = express.Router();

// Crear Empresa - SI
router.post("/crear", EmpresaController.crearEmpresa);

// Login Empresa - SI
router.post("/login", EmpresaController.loginEmpresa);

// Obtener Conductores de la empresa - SI
router.get("/:idEmpresa/conductores",EmpresaController.obtenerConductoresEmpresa);

// Obtener Vehículos de la empresa - SI
router.get("/:idEmpresa/vehiculos", EmpresaController.obtenerVehiculosEmpresa);

// Obtener Administradores de la empresa - SI
router.get("/:idEmpresa/administradores", EmpresaController.obtenerAdministradoresEmpresa);

// Crear Conductor - SI
router.post("/conductor/crear", EmpresaController.crearConductor);

// Crear Vehículo - SI
router.post("/vehiculo/crear", EmpresaController.crearVehiculo);

// Vincular Vehículo con Conductor - SI
router.post("/vincular", EmpresaController.vincularVehiculoConductor);

// Obtener Pedidos donde la empresa sea receptora (ordendes de entrada) - SI
router.get("/:idEmpresa/pedidos", EmpresaController.obtenerPedidos);

// Obtener historial de un pedido específico - SI
router.get(
  "/pedido/:idPedido/historial",
  EmpresaController.obtenerHistorialPedido
);

// Obtener la flota (vehiculo-concudctor) de la empresa - SI
router.get("/vehiculo-conductor/:idEmpresa", EmpresaController.obtenerflota);

// Mth para actualizar la informacion de administrador
router.put(
  "/administrador/actualizar/:idAdministrador",
  EmpresaController.actualizarAdministrador
);

// Mth para eliminar un administrador - SI
router.delete(
  "/administrador/eliminar/:idAdministrador",
  EmpresaController.eliminarAdministrador
);

// Mth para actualizar la informacion de vehiculo
router.put(
  "/vehiculo/actualizar/vehiculo/:idVehiculo",
  EmpresaController.actualizarVehiculo
);

// Mth para eliminar un vehiculo - SI
router.delete(
  "/vehiculo/eliminar/:idVehiculo",
  EmpresaController.eliminarVehiculo
);

// Mth para actualizar la informacion de conductor
router.put(
  "/conductor/actualizar/:idConductor",
  EmpresaController.actualizarConductor
);

// Mth para eliminar un conductor - SI
router.delete(
  "/conductor/eliminar/:idConductor",
  EmpresaController.eliminarConductor
);

// Mth para eliminar el vinculo de conductor-vehiculo - SI
router.delete(
  "/vehiculo-conductor/eliminar/:idvehiculo/:idconductor", EmpresaController.eliminarvinculo
);

export default router;
