export default class User extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		super.init(
			{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING
			},
			{
			timestamps: true,
			paranoid: true,
			sequelize,
			modelName: 'User',
			tableName: 'users',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at'
			}
		);
	}
}