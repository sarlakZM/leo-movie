import { render, screen } from "@testing-library/react";

import ErrorMessage from "./ErrorMessage";

describe("Component: Not Found", () => {
  test("render", async () => {
    const ChildConetnt = () => <>Not fount</>;
    render(
      <ErrorMessage>
        <ChildConetnt />
      </ErrorMessage>,
    );

    const nodeMessage = screen.getByText("Not fount", { exact: false });
    expect(nodeMessage).toBeInTheDocument();
  });
});
