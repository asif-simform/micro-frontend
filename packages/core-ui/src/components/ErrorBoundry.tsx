import * as React from "react";

interface IProps {
    children: React.ReactNode;
    appName: string;
}

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  public render() : React.ReactNode  {
    if (this.state.hasError) {
      return <p>Failed to load {this.props.appName}</p>;
    }

    return <>{this.props.children}</>
  }
}

export default ErrorBoundary;