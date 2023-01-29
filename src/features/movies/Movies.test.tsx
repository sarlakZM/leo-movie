import { BrowserRouter } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
import { act, render, screen } from "@testing-library/react";

import { mswServer } from "mocks/mockHttpServer";
import { mswGetMoviePopularTasks_response } from "mocks/handlers";
import FactoryMovies from "./Movies";

describe("Component: Movies", () => {
  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("MSW Testing render with get Popular Movies", async () => {
    mswServer.use(mswGetMoviePopularTasks_response);
    await act(async () => {
      render(<FactoryMovies />, { wrapper: BrowserRouter });
    });
  });

  test("render", async () => {
    await act(async () => {
      render(<FactoryMovies />, { wrapper: BrowserRouter });
    });

    const nodeLoading = screen.getByText("Loading ...");
    expect(nodeLoading).toBeInTheDocument();

    const nodeImage = screen.getByRole("img");
    expect(nodeImage).toBeInTheDocument();
  });
});
