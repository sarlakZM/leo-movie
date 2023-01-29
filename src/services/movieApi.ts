import { ResponseApiType } from "types/Api.types";
import { StatusMediaType, MediaType } from "types/Movie.types";
import { ACCOUNT_ID, SESSION_ID } from "utils/constants";
import { baseRequest } from "./baseApi";

const searchRequestMovie = ({
  query,
}: {
  [key: string]: string | number;
}): Promise<ResponseApiType<MediaType>> => {
  const endpoint = `/search/movie`;
  return baseRequest({ endpoint: endpoint, queryParams: { query: query, language: "en-US" } });
};

const getAccountMovieStatus = async (id: string | number) => {
  const endpoint = `movie/${id}/account_states`;
  return baseRequest({
    endpoint: endpoint,
    method: "GET",
    queryParams: { session_id: SESSION_ID, language: "en-US" },
  });
};

const getAccountFavoriteMovies = (): Promise<ResponseApiType<MediaType>> => {
  const endpoint = `account/${ACCOUNT_ID}/favorite/movies`;
  return baseRequest({
    endpoint: endpoint,
    method: "GET",
    queryParams: { session_id: SESSION_ID, language: "en-US" },
  });
};

const getAccountWatchlistMovies = (): Promise<ResponseApiType<MediaType>> => {
  const endpoint = `account/${ACCOUNT_ID}/watchlist/movies`;
  return baseRequest({
    endpoint: endpoint,
    method: "GET",
    queryParams: { session_id: SESSION_ID, language: "en-US" },
  });
};

const markAsFavorite = ({ mediaType, id }: Partial<StatusMediaType>) => {
  const endpoint = `account/${ACCOUNT_ID}/favorite`;
  return baseRequest({
    endpoint: endpoint,
    method: "POST",
    queryParams: { session_id: SESSION_ID, language: "en-US" },
    body: {
      media_type: mediaType,
      media_id: id,
      favorite: true,
    },
  });
};

const addToWatchlist = ({ mediaType, id }: Partial<StatusMediaType>) => {
  const endpoint = `account/${ACCOUNT_ID}/watchlist`;
  return baseRequest({
    endpoint: endpoint,
    method: "POST",
    queryParams: { session_id: SESSION_ID, language: "en-US" },
    body: {
      media_type: mediaType,
      media_id: id,
      watchlist: true,
    },
  });
};

const getMoviePopular = async (): Promise<ResponseApiType<MediaType>> => {
  const endpoint = `movie/popular`;
  return baseRequest({ endpoint: endpoint, queryParams: { language: "en-US" } });
};

export {
  getMoviePopular,
  markAsFavorite,
  getAccountFavoriteMovies,
  addToWatchlist,
  getAccountWatchlistMovies,
  getAccountMovieStatus,
  searchRequestMovie,
};
