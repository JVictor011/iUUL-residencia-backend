import { Model, DataTypes } from 'sequelize';
import sequelize from './db';

interface ConsultaAttributes {
	id: undefined;
	dataConsulta: Date;
	horaInicioConsulta: string;
	horaFimConsulta: string;
	cpfPaciente: string;
}

class Consulta extends Model<ConsultaAttributes> {
	public id!: undefined;
	public dataConsulta!: Date;
	public horaInicioConsulta!: string;
	public horaFimConsulta!: string;
	public cpfPaciente!: string;
}

Consulta.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		dataConsulta: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		horaInicioConsulta: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		horaFimConsulta: {
			type: DataTypes.TIME,
			allowNull: false,
		},
		cpfPaciente: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		modelName: 'consulta',
	}
);

export default Consulta;
