'use strict';
module.exports = (sequelize, DataTypes) => {
    const Notice = sequelize.define(
        'Notice',
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING
        },
        {underscored:false}
    );
    Notice.associate = function(models) {
        // associations can be defined here
        Notice.hasMany(models.NoticeAttachment,{foreignKey:'noticeId',as:'attachments'});

    };
    return Notice;
};
