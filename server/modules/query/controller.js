import models from '../../../database/models';
import { errorHandling } from '../utils/errorHandling';

export const getAllQueries = async (req, res) => {
  try {
    const query = await models.Query.findAll({
      include: [
        {
          model: models.QueryAttachment,
          as: 'attachments'
        },
        {
          model: models.QueryComment,
          as: 'comments'
        }
      ]
    });
    return res.status(200).json({ query });
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};


