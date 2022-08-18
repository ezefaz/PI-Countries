const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5')
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring')
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg"
        }
    })
};