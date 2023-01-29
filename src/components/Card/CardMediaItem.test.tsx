import { render, screen } from "@testing-library/react";

import { mockFetchMovieByIndex } from "mocks/mock.data";
import { MediaType } from "types/Movie.types";
import CardMediaItem from "./CardMediaItem";

describe("Component: Card Media Item", () => {
  const movie: MediaType = mockFetchMovieByIndex(0) as MediaType;

  test("render", async () => {
    render(<CardMediaItem title={movie.original_title} image={movie.poster_path} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    const altImage = screen.getByAltText(movie.original_title);
    expect(altImage).toBeInTheDocument();
  });
});
