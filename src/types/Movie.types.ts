export interface MediaType {
  adult: boolean;
  backdrop_path: string | undefined;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | undefined;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type StatusMediaType = {
  favorite: boolean;
  rated?: boolean;
  watchlist: boolean;
  id: number;
} & {
  mediaType?: string;
};
