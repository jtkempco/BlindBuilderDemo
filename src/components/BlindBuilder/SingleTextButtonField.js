import React, { Component } from "react"
import TextButton from './TextButton'

class SingleTextButtonField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let props = this.props;
  	let choice = props.choices[0];
    let checked = this.props.selectedValue === choice.value ? true : false;
  	let required = false;

  	return (
  	  <div class="Field Field--single-text-button">
  	    <label htmlFor={"single-text-button-" + this.props.name} class="Field__label Field--single-text-button__label">{this.props.displayName}</label>
  	    <TextButton {...choice} name={this.props.name} checked={checked} required={required} stepNumber={this.props.stepNumber} triggerOptionChanged={this.props.triggerOptionChanged} />
  	  </div>
  	)
  }
}

export default SingleTextButtonField
