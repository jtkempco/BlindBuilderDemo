import React, { Component } from "react"
import { findDOMNode } from "react-dom"

class TextInputControl extends Component {
  constructor(props) {
    super(props);
    this.state = { "inputValue" : "" };
    this.handleChange  = this.handleChange.bind(this);
    this.handleKeydown  = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    const selectedValue = this.props.selectedValue == null ? "" : this.props.selectedValue;
    this.setState({ inputValue: selectedValue });
  }

  componentDidUpdate(prevProps) {
    this.props.open === !0 && prevProps.open === !1 && this.node.querySelector("input").focus()
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
    this.props.triggerOptionChanged(this.props.stepNumber, e.target.name, e.target.value.trim());
    //this.props.triggerRoomLabelChanged(this.props.stepNumber, e.target.name, e.target.value.trim());
  }

  handleKeydown(e) {
    13 === e.keyCode && e.target.blur()
  }

  stepChanged(e) {
    e.stopPropagation(), e.preventDefault(), this.triggerOptionChanged(this.props.stepNumber, e.target.name, e.target.value.trim(), !1)
  }

  render() {
  	let props = this.props;
    const value = props.selectedValue == null ? "" : props.selectedValue;

  	return (
  	  <div ref={node => this.node = node} class={"Control Control--textinputcontrol show"}>
        <div class="Control__container Control--textinputcontrol__container">
    	     <input id="text-RoomLabel" name="RoomLabel" maxLength="14" minLength="0" tabIndex="1" type="text"
             value={this.state.inputValue}
             onChange={(e) => this.handleChange(e)}
             onKeyDown={(e) => this.handleKeydown(e)}
           />
        </div>
  	  </div>
  	)
  }
}

export default TextInputControl
