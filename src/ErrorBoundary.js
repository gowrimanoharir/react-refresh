//mostly from reactjs.org/docs/error-boundaries.html
//getDerived methods are available ONLY for class components not avail with hooks

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  //gets called anytime component has error
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    //usually this would be sent to Azure monitor, trackjs or sentry or similar consolidated error logging service
    console.error("ErrorBoundary caught an error", error, info);
  }

  //anytime prop or state changes this gets called
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click Here</Link> to go back to home page or wait for
          five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
