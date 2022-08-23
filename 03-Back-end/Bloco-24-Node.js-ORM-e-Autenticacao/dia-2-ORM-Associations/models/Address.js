/** @param {import('sequelize').Sequelize} sequelize */
/** @type {import('sequelize').ModelAttributes} */

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    city: { type: DataTypes.STRING },
    street: { type: DataTypes.STRING },
    number: { type: DataTypes.INTEGER },
    // A declaração da Foreign Key é opcional no model
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee, {
      foreignKey: 'employeeId', as: 'employees'
    });
  };
  return Address;
}