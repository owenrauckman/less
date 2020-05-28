import React, { Fragment } from "react";
import "./base.css";
import Navigation from "../navigation/index";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Navigation />
        {children}
      </Fragment>
    );
  }
}

export default Template;
