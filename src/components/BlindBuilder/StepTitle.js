import React, { Component } from "react";

class StepTitle extends Component {

  render() {
    return <h5 class="BlindBuilder__accordion__step__inner-content__title">{this.props.title}</h5>
  }
}

export default StepTitle;
