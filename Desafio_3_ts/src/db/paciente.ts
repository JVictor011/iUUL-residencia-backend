import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from './db';

const Paciente = sequelize.define('paciente', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	cpf: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	dataNascimento: {
		type: DataTypes.DATEONLY,
		allowNull: false,
	},
});

export default Paciente;
