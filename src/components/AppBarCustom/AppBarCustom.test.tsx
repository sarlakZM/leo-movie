import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import AppBarCustom from "./AppBarCustom";

describe("Component: App Bar Custom", () => {
  test("render", () => {
    //How to fix Error: useHref() may be used only in the context of a <Router> component
    render(<AppBarCustom />, { wrapper: BrowserRouter });
    const logo = screen.getAllByText(/leoMovie/i);
    logo.map((node) => expect(node).toHaveTextContent("leoMovie"));

    const home = screen.getAllByText(/Home/i);
    home.map((node) => expect(node).toHaveTextContent("Home"));
  });
});
