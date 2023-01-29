import { lazy } from "react";

const FactoryMovies = lazy(() => import("../features/movies/Movies"));
const Home = () => {
  return <FactoryMovies />;
};

export default Home;
