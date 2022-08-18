const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      AllowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      AllowNull: false,
      defaultValue: 'No capital'
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.INTEGER,
    }
  }, {timestamps: false});
};
