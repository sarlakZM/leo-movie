import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockInitialStatusMovieOutput } from "mocks/mock.data";
import * as movieApi from "services/movieApi";
import FavoriteButton from "./FavoriteButton";

describe("Component: Favorite Button", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test("Check the status as default", async () => {
    await act(async () => {
      render(<FavoriteButton params={{ ...mockInitialStatusMovieOutput }} />, container);
    });

    const favoriteButton = screen.getByLabelText("add to favorites", { selector: "button" });
    await expect(favoriteButton).toBeInTheDocument();
  });

  test("Test to Mark Movie As Favorite", async () => {
    const mockExpectedApiOutputFavorite = { ...mockInitialStatusMovieOutput, favorite: true };
    // const mock = jest.spyOn(movieApi, "markAsFavorite").mockReturnValue(Promise.resolve(mockExpectedApiOutputFavorite));
    const mock_ = jest.spyOn(movieApi, "markAsFavorite").mockImplementation(async () => {
      return Promise.resolve(mockExpectedApiOutputFavorite);
    });

    await act(async () => {
      render(<FavoriteButton params={{ ...mockInitialStatusMovieOutput }} />, container);
    });

    const favoriteButton = screen.getByLabelText("add to favorites", { selector: "button" });
    await act(async () => {
      userEvent.click(favoriteButton);
    });
    await expect(mock_).toHaveBeenCalledTimes(1);
    jest.restoreAllMocks();
  });
});
