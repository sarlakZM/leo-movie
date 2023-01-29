import { act, render } from "@testing-library/react";

import RouteHandler from "./RouteHandler";

describe("Component: Route Handler", () => {
  test("render", async () => {
    await act(() => {
      render(<RouteHandler />);
    });
  });
});
