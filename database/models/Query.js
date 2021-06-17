'use strict';
module.exports = (sequelize, DataTypes) => {
    const Query = sequelize.define(
        'Query',
        {
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
        }
        );
    Query.associate = function(models) {
        // associations can be defined here
        Query.hasMany(models.QueryAttachment,{foreignKey:'queryId',as:'attachments'});
        Query.hasMany(models.QueryComment,{foreignKey:'queryId',as:'comments'});

    };

    return Query;
};
