import { render, screen } from "@testing-library/react";

import { mockInitialStatusMovieOutput } from "mocks/mock.data";
import WatchLaterButton from "./WatchLaterButton";

describe("Component: WatchLater Button", () => {
  test("Check the status as default", async () => {
    render(<WatchLaterButton params={{ ...mockInitialStatusMovieOutput }} />);
    const watchlistButton = screen.getByLabelText("add to watchlist", { selector: "button" });
    expect(watchlistButton).toBeInTheDocument();
  });
});
