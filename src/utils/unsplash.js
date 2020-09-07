import Unsplash, { toJson } from "unsplash-js";
const dotenv = require("dotenv");
dotenv.config();

const unsplash = new Unsplash({
  accessKey: "_nWSZ3cjfckl25DvPniEyNnfND0F7WqDTaoS6_p4sLQ",
});

const unsplashPhotos = (topic) =>
  unsplash.search
    .photos(topic, Math.random() * 10)
    .then(toJson)
    .then(({ results }) => {
      if (results.length) {
        return results.map((img) => ({
          image: img.urls.regular,
          title: img.user.name,
          caption: img.alt_description,
        }));
      }
    })
    .catch((err) => {
      console.error(err);
    });

export default unsplashPhotos;
