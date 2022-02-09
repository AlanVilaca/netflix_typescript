import multer from "multer";
import path from "path";
import crypto from "crypto";

const uploadFoler = path.resolve(__dirname, "..", "..", "uploads");

export default {
  directory: uploadFoler,
  storage: multer.diskStorage({
    destination: uploadFoler,
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const filename = `${fileHash}-${file.originalname}`;
      callback(null, filename);
    }
  })
};