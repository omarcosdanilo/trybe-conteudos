const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },{
    timestamps: false
  }, {
    tableName: 'Xablau'
  })

  return Store;
}

module.exports = Store