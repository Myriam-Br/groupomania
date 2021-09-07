'use strict';
module.exports = (sequelize, DataTypes) => {
  var Publication = sequelize.define('Message', {
    isUSERS: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.User.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  }); 
  return Publication;
};