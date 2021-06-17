'use strict';
module.exports = (sequelize, DataTypes) => {
    const QueryAttachment = sequelize.define(
        'QueryAttachment',
        {
            url: DataTypes.STRING,
            description: DataTypes.STRING ,
            queryId: DataTypes.INTEGER

        },
        {underscored:false}
    );
    QueryAttachment.associate = function(models) {
        QueryAttachment.belongsTo(models.Query, { foreignKey: "queryId" });
    };
    return QueryAttachment;
};
