'use strict';
module.exports = (sequelize, DataTypes) => {
    const NoticeAttachment = sequelize.define(
        'NoticeAttachment',
        {
            url: DataTypes.STRING,
            description: DataTypes.STRING ,
            noticeId: DataTypes.INTEGER

        },
        {underscored:false}
    );
    NoticeAttachment.associate = function(models) {
        NoticeAttachment.belongsTo(models.Notice, { foreignKey: "noticeId" });
    };
    return NoticeAttachment;
};
