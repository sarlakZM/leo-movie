import { render, screen } from "@testing-library/react";

import { mockFetchMovieByIndex } from "mocks/mock.data";
import { MediaType } from "types/Movie.types";
import CardItem from "./CardItem";

describe("Component: Card Item", () => {
  const movie: MediaType = mockFetchMovieByIndex(0) as MediaType;

  test("render", async () => {
    render(<CardItem {...movie} />);

    const favoriteButton = screen.getByLabelText("add to favorites", { selector: "button" });
    expect(favoriteButton).toBeInTheDocument();

    const watchlistButton = screen.getByLabelText("add to watchlist", { selector: "button" });
    expect(watchlistButton).toBeInTheDocument();

    const title = screen.getByText(movie.title, { exact: false });
    expect(title).toHaveTextContent(movie.title);
    expect(title).toBeInTheDocument();

    const altImage = screen.getByRole("img", { name: movie.original_title });
    expect(altImage).toBeInTheDocument();
  });
});
