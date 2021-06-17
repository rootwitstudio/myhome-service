import models from '../../../database/models';
import { errorHandling } from '../utils/errorHandling';

export const getAllFlats = async (req, res) => {
  try {
    const flat = await models.Flat.findAll({
      include: [
        {
          model: models.Block,
          as: 'block'
        }
      ]
    });
    return res.status(200).json({ flat });
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};


