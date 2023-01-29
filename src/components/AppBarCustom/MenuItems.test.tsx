import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import MenuItems from "./MenuItems";

describe("Component: Menu Items", () => {
  test("render", () => {
    const handleCloseNavMenu = jest.fn();
    const handleOpenNavMenu = jest.fn();
    const anchorElNav: null | HTMLElement = null;
    render(<MenuItems props={{ handleCloseNavMenu, handleOpenNavMenu, anchorElNav }} />, {
      wrapper: BrowserRouter,
    });

    const searchAnchor = screen.getByText(/search/i);
    const favoriteAnchor = screen.getByText(/favorite/i);
    const watchlistAnchor = screen.getByText(/watchlist/i);

    expect(searchAnchor).toHaveTextContent("Search");
    expect(searchAnchor).not.toHaveTextContent("Home");
    expect(searchAnchor).toBeInTheDocument();

    expect(favoriteAnchor).toHaveTextContent("Favorite");
    expect(watchlistAnchor).toHaveTextContent("Watchlist");
  });
});
