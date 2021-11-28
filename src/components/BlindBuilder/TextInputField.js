import React, { Component } from "react"
import TextInputControl from './TextInputControl'

class TextInputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let props = this.props;

  	return (
  	  <div class="Field Field--text-input">
  	    <label htmlFor={"text-input-" + props.name} class="Field__label Field--text-input__label">{props.displayName}</label>
  	    <TextInputControl {...props} />
  	  </div>
  	)
  }
}

export default TextInputField
