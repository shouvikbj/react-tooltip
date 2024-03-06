import React, { Component } from "react";
import "../tooltip.css";

export default class Tooltip extends Component {
  // constructor to create state for this class
  constructor() {
    super();
    this.state = {
      direction: "my-tooltiptext t-top",
      content: "Hover Content",
    };
  }

  //  function to change values if data change
  hanldeTooltip = () => {
    // setting content
    this.setState({
      content: this.props.content,
    });

    // setting up direction according to direction
    if (this.props.direction === "top") {
      this.setState({
        direction: "my-tooltiptext t-top",
      });
    } else if (this.props.direction === "right") {
      this.setState({
        direction: "my-tooltiptext t-right",
      });
    } else if (this.props.direction === "left") {
      this.setState({
        direction: "my-tooltiptext t-left",
      });
    } else {
      this.setState({
        direction: "my-tooltiptext t-bottom",
      });
    }
  };

  render() {
    return (
      // div for bidning componet for tooltip
      <div className="my-tooltip" onMouseEnter={this.hanldeTooltip}>
        {/* span for tooltip text */}
        <span className={this.state.direction}>{this.state.content}</span>
        {/* componet fetching from where is called */}
        {this.props.children}
      </div>
    );
  }
}