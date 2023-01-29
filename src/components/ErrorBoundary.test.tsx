import { act, render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("Component: Error Boundary", () => {
  test("render", async () => {
    const NotError = () => {
      return <>Not fount Error</>;
    };
    await act(() => {
      render(
        <ErrorBoundary>
          <NotError />
        </ErrorBoundary>,
      );
    });

    const nodeMessage = screen.getByText("Not Fount Error", { exact: false });
    expect(nodeMessage).toBeInTheDocument();
  });

  test("Error Boundary", async () => {
    const ThrowError = () => {
      return <>Sorry... there was an error</>;
    };
    await act(() => {
      render(
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>,
      );
    });
    const nodeMessage = screen.getByText("Sorry... there was an error", { exact: false });
    expect(nodeMessage).toBeInTheDocument();
  });
});
