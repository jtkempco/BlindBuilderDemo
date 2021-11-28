import React, { Component } from "react"
import { connect } from 'react-redux'
import ColorSwatchField from './ColorSwatchField'
import PropTypes from 'prop-types'


class ColorStep extends Component {
  render() {
    let props   = this.props;
    let fields  = this.props.fields;
    let Color   = fields[0];

    return (
    	<div class="BlindBuilder__accordion__step__inner-content__fields">
        <ColorSwatchField
          stepNumber={this.props.stepNumber}
          label={Color.displayName}
          name={Color.name}
          choices={Color.choices}
          defaultValue={Color.defaultValue}
          selectedValue={Color.selectedValue}
          required={Color.required}
          triggerOptionChanged={this.props.triggerOptionChanged} />
    	</div>
    )
  }
}

ColorStep.propTypes = {
    stepNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    updating: PropTypes.bool,
    fields: PropTypes.array,
    triggerOptionChanged: PropTypes.func,
    toggleStepAnimating: PropTypes.func,
    open: PropTypes.bool,
    scrollToElement: PropTypes.any
}

const mapStateToProps = (state, ownProps) => {
  let local = state.rootReducer.local;
  let remote = state.rootReducer.remote;

  let stepNumber = ownProps.stepNumber;
  let step = remote.steps[stepNumber];

  return {
      stepNumber: stepNumber,
      stepName: step.name,
      fields: step.fields,
      open: step.open
  }
}

export default connect(mapStateToProps)(ColorStep);
