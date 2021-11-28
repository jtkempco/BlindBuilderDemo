import React, { Component } from "react"
import Arrow from './Arrow'
import PropTypes from 'prop-types'


class OrangeButtonLink extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { inverse, extraClassNames, buttonText, href } = this.props
  	return (
      <a class={"OrangeButtonLink" + (inverse ? "--inverse " : " ") + "orange-button-link " + extraClassNames} href={href}>
        <span class="verbose">{buttonText}</span>
        <span class="short">{buttonText}</span>
        <Arrow />
      </a>
  	)
  }
}

OrangeButtonLink.propTypes = {
    inverse: PropTypes.bool,
    extraClassNames: PropTypes.string,
    buttonText: PropTypes.string
}

export default OrangeButtonLink
