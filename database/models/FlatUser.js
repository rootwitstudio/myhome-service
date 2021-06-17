'use strict';
module.exports = (sequelize, DataTypes) => {
    const FlatUser = sequelize.define(
        'FlatUser',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            mobile: DataTypes.STRING
        },
        {}
    );
    return FlatUser;
};
