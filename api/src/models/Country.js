const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {     // el define me define la tabla que voy a crear
    name: {
      type: DataTypes.STRING,
      allowNull: false,           // el allowNull significa que este campo es REQUERIDO.
    },
    id: {                        // si yo no especifico el ID, sequelize de por si le va a asignar uno numérico.
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true        // significa que el ID sera la clave primaria
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
      type: DataTypes.FLOAT, // float representa numeros con decimales
    },
    population: {
      type: DataTypes.INTEGER,
    }
  });
};
