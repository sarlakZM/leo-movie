import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";

import App from "./App";

test("Component: App", async () => {
  await act(() => {
    render(<App />);
  });
});
