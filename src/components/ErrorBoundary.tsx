import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    // In production, send errors to a logging service (e.g. Sentry)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ fontFamily: "Poppins", color: "var(--description-text-color)" }}>
            Algo salió mal. Por favor, recarga la página.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
