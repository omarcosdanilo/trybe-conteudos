/** @param {import('sequelize').Sequelize} sequelize */
/** @type {import('sequelize').ModelAttributes} */

 module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey : 'employeeId', as: 'addresses' });
  };

  return Employee;
}