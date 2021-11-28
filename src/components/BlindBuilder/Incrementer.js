import React, { Component } from "react"

class Incrementer extends Component {

  state = { quantity: this.props.quantity }

  incrementUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({quantity: this.state.quantity + 1});
  }

  incrementDn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({quantity: this.state.quantity - 1});
  }

  onChange = (e) => {

  }
  
  render() {
    let dnDisabled = this.state.quantity > this.props.min ? false : true;
    let upDisabled = this.state.quantity < this.props.max ? false : true;
  	return (
      <Incrementer name="Incrementer-demo" value={2} type={this.props.type} required={false}>
        <div class="Control Control--incrementer">
          <div class="Control__container  Control--incrementer__container">
            <a class="SpinButton" href="#" data-disable={dnDisabled} onClick={this.incrementDn}>–</a>
            <input
              name={this.props.name}
              min={this.props.min}
              max={this.props.max}
              autoComplete="off"
              id={this.props.type + "-" + this.props.name}
              pattern={this.props.pattern}
              disabled={true}
              data-init-value={this.props.min}
              type={this.props.type}
              value={this.state.quantity}
              onChange={this.onChange}
              required={false}
              onChange={console.log("Increamant demo changed!!")}
            />
            <a class="SpinButton" href="#" data-disable={upDisabled} onClick={this.incrementUp}>+</a>
          </div>
        </div>
      </Incrementer>
  	)
  }
}

export default Incrementer