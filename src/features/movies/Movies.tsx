import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { MediaType } from "types/Movie.types";
import {
  getAccountFavoriteMovies,
  getAccountWatchlistMovies,
  getMoviePopular,
  searchRequestMovie,
} from "services/movieApi";
import { ResponseApiType } from "types/Api.types";
import { DEBOUNCED_TIME } from "utils/constants";
import { SystemMessages } from "utils/system.message";
import { useDebounce } from "utils/utils";
import CardItem from "components/Card/CardItem";
import SearchBox from "components/SearchBox/SearchBox";
import ErrorMessage from "components/ErrorMessage";
import CardList from "components/Card/CardList";

const FactoryMovies = () => {
  const [movies, setMovies] = useState<MediaType[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const currentPathname = useLocation().pathname.trim();
  const [querysearch, setQuerySearch] = useState<string | number>(`''`);
  const debouncedSearchTerm = useDebounce(querysearch, DEBOUNCED_TIME);

  let fetchData!: ResponseApiType<MediaType> | Promise<ResponseApiType<MediaType>>;

  useEffect(() => {
    fetchData = fetchMovies(currentPathname, querysearch);
    fetchData
      .then(async (response: ResponseApiType<MediaType>) => {
        "results" in response && setMovies(response.results as MediaType[]);
        setLoading(false);
      })
      .catch(async (error: any) => {
        setLoading(false);
        setMovies([]);
        if ("success" in error) {
          !error.success && setError(error.status_message as string);
        } else {
          setError(SystemMessages.NetworkError);
        }
      });
    return () => {
      setLoading(false);
    };
  }, [currentPathname, querysearch]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      {!error && !loading && currentPathname.includes("/movie/search") && (
        <SearchBox setQuerySearch={setQuerySearch} />
      )}
      {loading && <ErrorMessage>{SystemMessages.loadingText}</ErrorMessage>}
      {error && <ErrorMessage>{SystemMessages.InternalServerError}</ErrorMessage>}
      {!error && !loading && !movies?.length && (
        <ErrorMessage>{SystemMessages.NotFount}</ErrorMessage>
      )}
      <CardList>
        {!loading &&
          movies?.map((movie: MediaType) => (
            <Grid item xs={12} md={3} key={movie.id}>
              <CardItem {...movie} />
            </Grid>
          ))}
      </CardList>
    </Box>
  );
};

export default FactoryMovies;

export const fetchMovies = (currentPathname: string, querysearch: string | number) => {
  const pathToApi: Record<string, Promise<ResponseApiType<MediaType>>> = {
    "/movie/search": searchRequestMovie({ query: querysearch || `''` }),
    "/movie/favorite": getAccountFavoriteMovies(),
    "/movie/watchlist": getAccountWatchlistMovies(),
    "/": getMoviePopular(),
  };
  return pathToApi[currentPathname] ?? getMoviePopular();
};
