import React, { Component } from "react"
import { connect } from 'react-redux'
import ColorSwatchField from './ColorSwatchField'
import MultipleImageButtonField from './MultipleImageButtonField'
import PointyTextButtonField from './PointyTextButtonField'
import PropTypes from 'prop-types'
import renderSubOptions from '../../myPackages/commonFunctions'


class InnerStep extends Component {
  render() {
    const Components = { "color": ColorSwatchField, "valance": MultipleImageButtonField, "liftControlPosition":  MultipleImageButtonField, "drawStackType": MultipleImageButtonField, "cellSize": PointyTextButtonField };
    const Component  = Components[this.props.stepName];
    return (
    	<div class="BlindBuilder__accordion__step__inner-content__fields">
        <Component
          stepNumber={this.props.stepNumber}
          label={this.props.displayName}
          name={this.props.name}
          choices={this.props.choices}
          defaultValue={this.props.defaultValue}
          selectedValue={this.props.selectedValue}
          required={this.props.required}
          triggerOptionChanged={this.props.triggerOptionChanged}
      />
    	</div>
    )
  }
}


InnerStep.propTypes = {
    stepNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    updating: PropTypes.bool,
    choices: PropTypes.array,
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
  let field = step.fields[0];

  return {
      stepNumber: stepNumber,
      stepName: step.name,
      label: field.displayName,
      name: field.name,
      choices: field.choices,
      defaultValue: field.defaultValue,
      selectedValue: field.selectedValue,
      required: field.required,
      open: step.open
  }
}

export default connect(mapStateToProps)(InnerStep);
