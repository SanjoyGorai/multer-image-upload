import { upload } from '../middlewares/multerConfig.js';
import handleErrors from '../utils/handleErrors.js';

export const uploadImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return handleErrors(res, err.message, 400);
    }
    if (!req.file) {
      return handleErrors(res, 'No file uploaded', 400);
    }
    res.status(200).json({
      message: 'Image uploaded successfully',
      imagePath: `/uploads/${req.file.filename}`,
    });
  });
};
