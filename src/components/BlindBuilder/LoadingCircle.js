import React, { Component } from "react"
import PropTypes from 'prop-types'


class LoadingCircle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let visible = this.props.visible ? "visible" : "hidden";
    let opacity = this.props.visible ? 1 : 0;
  	return (
      <div class={"LoadingCircle " + visible} style={{opacity: opacity, transition: 'all 0.2s linear 0s'}}>
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      </div>
  	)
  }
}

LoadingCircle.propTypes = {
    visible: PropTypes.bool
}

export default LoadingCircle
