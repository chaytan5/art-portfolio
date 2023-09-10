import { encode } from "blurhash";
import fs from "fs/promises";
import environmentImages from "@/public/environment-worldbuilding";

const encodeImageToBlurhash = (path) =>
  new Promise((resolve, reject) => {
    sharp(path)
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: "inside" })
      .toBuffer((err, buffer, { width, height }) => {
        if (err) return reject(err);
        resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
      });
  });

async function encodeAllImages() {
  const imagesNames = await fs.readdir(IMAGES_DIR_PATH);

  const data = [];

  for (const name of imagesNames) {
    const encodedHash = await encodeImageToBlurhash(
      path.join(__dirname, "public", "environment-worldbuilding", name),
    );
    data.push({ name, blurhash: encodedHash });
    console.log("Hash: ", encodedHash);
  }

  console.log(data);
}
