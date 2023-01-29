import { routes } from "./routes";

export const BASE_URL = `${process.env.REACT_APP_TMDB_API_BASE_URL}`;
export const API_KEY = `${process.env.REACT_APP_TMDB_API_KEY}`;
export const ACCOUNT_ID = `${process.env.REACT_APP_ACCOUNT_ID}`;
export const SESSION_ID = `${process.env.REACT_APP_SESSION_ID}`;

export const MenuItemTitles = [...routes];

export const DEBOUNCED_TIME = 1000;
export const MOVIE_POSTER_PATH = "https://image.tmdb.org/t/p/w200/";
export const APP_TITLE = "leoMovie";
