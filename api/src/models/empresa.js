// src/models/Empresa.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Empresa = sequelize.define('Empresa', {
  idEmpresa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  Contrasena: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  Direccion: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  }
}, {
  tableName: 'Empresa',
  timestamps: false
});

export default Empresa;
