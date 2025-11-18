// SDK initialization
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLICKEY,
  privateKey: process.env.IMAGEKIT_PRIVATEKEY,
  urlEndpoint: process.env.IMAGEKIT_URLENDPOINT,
});

const uploadFile = async (file) => {
  try {
    const res = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname || "uploaded-audio",
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default uploadFile;
