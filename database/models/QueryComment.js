'use strict';
module.exports = (sequelize, DataTypes) => {
    const QueryComment = sequelize.define(
        'QueryComment',
        {
            content: DataTypes.STRING,
            queryId: DataTypes.INTEGER

        },
        {underscored:false}
    );
    QueryComment.associate = function(models) {
        QueryComment.belongsTo(models.Query, { foreignKey: "queryId" });
    };
    return QueryComment;
};
