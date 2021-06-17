import models from '../../../database/models';
import { errorHandling } from '../utils/errorHandling';

export const getAllBlocks = async (req, res) => {
  try {
    const block = await models.Block.findAll();
    return res.status(200).json({ block });
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};


