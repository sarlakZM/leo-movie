import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { markAsFavorite } from "services/movieApi";
import { StatusMediaType } from "types/Movie.types";
import { ResponseApiType } from "types/Api.types";

const FavoriteButton = ({
  params: { id, mediaType, favorite },
}: {
  params: Partial<StatusMediaType>;
}) => {
  const [error, setError] = useState<string>("");
  const [isFavorite, setFavorite] = useState<boolean | undefined>(favorite);

  useEffect(() => {
    setFavorite(favorite);
  }, [favorite]);

  const handleMarkAsFavorite = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    markAsFavorite({
      mediaType: mediaType,
      id: id,
    })
      .then((response: ResponseApiType<Record<string, string>>) => setFavorite(true))
      .catch((error) => setError(error));
  };
  return (
    <IconButton
      color={isFavorite ? "primary" : "default"}
      aria-label="add to favorites"
      onClick={(event) => handleMarkAsFavorite(event)}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default FavoriteButton;
