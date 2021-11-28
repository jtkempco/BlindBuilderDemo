import React, { Component } from "react";

class StepIntroText extends Component {

  render() {
    return <p className="BlindBuilder__accordion__step__inner-content__introText" dangerouslySetInnerHTML={{__html: this.props.introText}} />
  }
}

export default StepIntroText;
