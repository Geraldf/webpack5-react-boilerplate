import React from "react";
import axios from "axios";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidMount() {
    // Set axios interceptors
    this.requestInterceptor = axios.interceptors.request.use((req) => {
      this.setState({ error: null });
      return req;
    });

    this.responseInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        alert("Error happened");
        this.setState({ error });
      }
    );
  }
  componentWillUnmount() {
    // Remove handlers, so Garbage Collector will get rid of if WrappedComponent will be removed
    axios.interceptors.request.eject(this.requestInterceptor);
    axios.interceptors.response.eject(this.responseInterceptor);
  }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    let renderSection = this.state.error ? (
      <div>
        Error has happend. {this.state.error} -- {this.state.errorInfo}
      </div>
    ) : (
      { ...this.props.children }
    );
    return renderSection;
  }
}

export default ErrorBoundary;
