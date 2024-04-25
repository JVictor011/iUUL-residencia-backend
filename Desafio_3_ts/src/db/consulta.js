"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
const Consulta = db_1.default.define('consulta', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    dataConsulta: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    horaInicioConsulta: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    horaFimConsulta: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    cpfPaciente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});
exports.default = Consulta;
