'use strict';
module.exports = (sequelize, DataTypes) => {
    const Block = sequelize.define(
        'Block',
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            noOfFloors: DataTypes.INTEGER,
            noOfFlats: DataTypes.INTEGER
        }
    );
    return Block;
};
