import React, { Fragment } from "react";
import "./base.css";
import Navigation from "../navigation/index";

class Template extends React.Component {
  render() {
    const { children, isFixed } = this.props;

    return (
      <Fragment>
        <Navigation isFixed={isFixed} />
        {children}
      </Fragment>
    );
  }
}

export default Template;
