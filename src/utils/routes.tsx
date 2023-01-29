import { RoutePropsType } from "types/Router.types";

export const routes: RoutePropsType[] = [
  { title: "Home", path: "/", component: () => import("../pages/Home") },
  {
    title: "Search",
    path: "/movie/search",
    component: () => import("../features/movies/Movies"),
  },
  {
    title: "Favorite",
    path: "/movie/favorite",
    component: () => import("../features/movies/Movies"),
  },
  {
    title: "Watchlist",
    path: "/movie/watchlist",
    component: () => import("../features/movies/Movies"),
  },
];
