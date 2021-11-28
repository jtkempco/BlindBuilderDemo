import React, { Component } from "react"
import Checkmark from './Checkmark'


class TextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {"checked": props.checked, "value": props.value};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(selectedValue){
    let checked = this.state.checked;
    selectedValue = !checked == true ? selectedValue : null;
    this.props.triggerOptionChanged(this.props.stepNumber, this.props.name, selectedValue);
    this.setState({checked: !checked});
  }

  render() {
  	return (
  	    <div class="Control Control--textbutton show">
  	      <div class={"Control__container  Control--textbutton__container " + (this.state.checked ? "selected" : "")} onClick={() => this.handleClick(this.props.value)}>
  	        <span key={'frame-1'} class="Control__container__frame Control__container__frame--top"></span>
  	        <span key={'frame-2'} class="Control__container__frame Control__container__frame--bottom"></span>
  	        <span key={'frame-3'} class="Control__container__frame Control__container__frame--left"></span>
  	        <span key={'frame-4'} class="Control__container__frame Control__container__frame--right"></span>
  	        <Checkmark />
  	        <div class="Control--textbutton__content">
  	          <p dangerouslySetInnerHTML={{__html: this.props.displayName}} />
  	          <p>{this.props.description}</p>
  	          <input type="checkbox" id={this.props.name + "-Y"} name={this.props.name} value={this.props.value} />
  	        </div>
  	        <div class="Control--textbutton__container__frame"></div>
  	      </div>
  	    </div>
  	)
  }
}

export default TextButton
