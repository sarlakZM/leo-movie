import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Logo from "./Logo";

describe("Component: Logo", () => {
  test("render", () => {
    render(
      <Logo
        props={{
          variant: "h5",
          sx: { display: { xs: "none", md: "flex" } },
          flexGrow: 0,
          fontWeight: 900,
        }}
      />,
      { wrapper: BrowserRouter },
    );
    const logo = screen.getAllByText(/leoMovie/i);
    logo.map((node) => expect(node).toHaveTextContent("leoMovie"));
  });
});
