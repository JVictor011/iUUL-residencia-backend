import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Consultorio', 'postgres', 'jovi', {
	dialect: 'postgres',
	host: 'localhost',
	port: 5432,
});

export default sequelize;
