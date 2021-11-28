import React, { Component } from "react"
import { connect } from 'react-redux'
import Arrow from './Arrow'
import $ from 'jquery'


class ContinueButton extends Component {
  constructor(props) {
		super(props);
    this.onClick = this.onClick.bind(this);
	}

  onClick(e) {
    if( this.props.complete ) {
      var $target = $('.BlindBuilder__accordion__step').eq(this.props.stepNumber);
      $("html, body").animate({scrollTop: $target.offset().top + 50}, 550);
      this.props.onToggleNextStep(this.props.stepNumber, this.props.open);
    }
  }

  render() {
    let props = this.props;

    return (
      <button class={"ContinueButton ContinueButton--" + (props.complete ? "enabled" : "disabled")} onClick={this.onClick}>
        <div>
          <span class="verbose">Continue To Next Step</span>
          <span class="short">Continue</span>
          <Arrow />
        </div>
      </button>
    )
  }
}

export default ContinueButton;
