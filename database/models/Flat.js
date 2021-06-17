'use strict';
module.exports = (sequelize, DataTypes) => {
    const Flat = sequelize.define(
        'Flat',
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            floor: DataTypes.INTEGER,
            buildUpArea: DataTypes.STRING,
            carpetArea: DataTypes.STRING,
            bedroom:DataTypes.STRING,
            bathroom:DataTypes.STRING,
            carParking:DataTypes.STRING,
            tenantType:DataTypes.STRING,
            isAvailableForRent:DataTypes.STRING,
            blockId:DataTypes.STRING
        }
    );
    Flat.associate = function(models) {
        // associations can be defined here
        Flat.belongsTo(models.Block, {
            foreignKey: 'blockId',
            as: 'block'
        });
    }
    return Flat;
};
