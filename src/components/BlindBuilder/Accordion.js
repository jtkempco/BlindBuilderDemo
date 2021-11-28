import React, { Component } from "react"
import { connect } from 'react-redux'
import BaseStep from './BaseStep'
import PropTypes from 'prop-types'

class Accordion extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    var anchorTags = document.querySelectorAll(".ModalTrigger");
    if (anchorTags && anchorTags.length > 0) {
      console.log("(Accordion.js) anchor tags", anchorTags);
      for (var i = 0; i < anchorTags.length; i++) {
        var href = anchorTags[i].getAttribute("href");
        anchorTags[i].removeAttribute("href", void 0), anchorTags[i].setAttribute("data-href", href), anchorTags[i].classList.remove("ModalTrigger"), anchorTags[i].classList.add("ModalTriggers")
      }
    }
  }

  render() {
    return (
      <span class={"BlindBuilder__accordion " + ( this.props.updating ? "updating" : "" ) }>
        {this.props.steps.map((step, index) => {
          return <BaseStep key={index} stepNumber={index} totalSteps={this.props.steps.length} stepName={step.displayName} note={step.note} />
        })}
      </span>
    )
  }
}

Accordion.propTypes = {
    steps: PropTypes.array,
    updating: PropTypes.bool,
    started: PropTypes.bool,
    preconfigured: PropTypes.bool
}

const mapStateToProps = (state) => {
    let local = state.rootReducer.local;
    let remote = state.rootReducer.remote;
    return {
        steps: remote.steps,
        updating: local.updating,
        started: local.started,
        preconfigured: false,
        productCode: remote.productCode,
        productName: remote.productName,
        productType: null
    }
}

export default connect(mapStateToProps)(Accordion);
