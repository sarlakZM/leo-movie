import { Component, ErrorInfo } from "react";

import { PropsType, State } from "types/App.types";
import { SystemMessages } from "utils/system.message";
import ErrorMessage from "./ErrorMessage";

class ErrorBoundary extends Component<PropsType, State> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.log("Uncaught error:", error, errorInfo);
    return { hasError: true, errorInfo };
  }

  public render() {
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return <ErrorMessage> {errorInfo ?? SystemMessages.NetworkError}</ErrorMessage>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
