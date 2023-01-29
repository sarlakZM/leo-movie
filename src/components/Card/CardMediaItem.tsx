import CardMedia from "@mui/material/CardMedia";

import { MOVIE_POSTER_PATH } from "utils/constants";

const CardMediaItem = ({ title, image }: Record<string, string | undefined>) => {
  return (
    <>
      <CardMedia
        component="img"
        sx={{ height: 200, borderRadius: "0.5em", objectFit: "cover" }}
        image={image ? `${MOVIE_POSTER_PATH}${image}` : image}
        alt={title}
      />
    </>
  );
};

export default CardMediaItem;
