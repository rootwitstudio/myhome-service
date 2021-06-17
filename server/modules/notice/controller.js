import models from '../../../database/models';
import { errorHandling } from '../utils/errorHandling';

export const getAllNotice = async (req, res) => {
  try {
    const notice = await models.Notice.findAll({
      include: [
        {
          model: models.NoticeAttachment,
          as: 'attachments'
        }
      ],
      order: [
        ['updatedAt', 'DESC']
      ],
    });
    return res.status(200).json({ notice });
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};


