import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import { addToWatchlist } from "services/movieApi";
import { StatusMediaType } from "types/Movie.types";
import { ResponseApiType } from "types/Api.types";

const WatchLaterButton = ({
  params: { id, mediaType, watchlist },
}: {
  params: Partial<StatusMediaType>;
}) => {
  const [error, setError] = useState<string>("");
  const [isWatchlist, setWatchLater] = useState<boolean | undefined>(watchlist);

  useEffect(() => {
    setWatchLater(watchlist);
  }, [watchlist]);

  const handleAddToWatchlist = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    addToWatchlist({ mediaType: mediaType, id: id })
      .then((response: ResponseApiType<Record<string, string>>) => setWatchLater(true))
      .catch((error) => setError(error));
  };

  return (
    <IconButton
      color={isWatchlist ? "primary" : "default"}
      aria-label="add to watchlist"
      onClick={(event) => handleAddToWatchlist(event)}
    >
      <WatchLaterIcon />
    </IconButton>
  );
};

export default WatchLaterButton;
