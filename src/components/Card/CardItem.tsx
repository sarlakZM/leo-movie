import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { getAccountMovieStatus } from "services/movieApi";
import { MediaType } from "types/Movie.types";
import WatchLaterButton from "components/Button/WatchLaterButton";
import FavoriteButton from "components/Button/FavoriteButton";
import { ReadMoreLink } from "./CardItem.styles";
import CardMediaItem from "./CardMediaItem";

const CardItem = ({
  title,
  overview,
  original_title,
  poster_path,
  release_date,
  backdrop_path,
  id,
  ...resProps
}: MediaType) => {
  const [error, setError] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(false);
  const [watchlist, setWatchLater] = useState<boolean>(false);
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "<<" : ">>";

  useEffect(() => {
    getAccountMovieStatus(id)
      .then(({ favorite, watchlist }) => {
        setWatchLater(watchlist);
        setFavorite(favorite);
      })
      .catch((error) => setError(error));
    return () => {
      // console.log("Bye");
    };
  }, [id]);

  return (
    <Card>
      <CardHeader title={title} subheader={release_date} />
      <CardMediaItem image={poster_path ?? backdrop_path} title={original_title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {readMore ? overview : overview.slice(0, 100)}
          <ReadMoreLink
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {linkName}
          </ReadMoreLink>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteButton params={{ id: id, mediaType: "movie", favorite: favorite }} />
        <WatchLaterButton params={{ id: id, mediaType: "movie", watchlist: watchlist }} />
      </CardActions>
    </Card>
  );
};

export default CardItem;
