import React, { Component } from "react"
import { connect } from 'react-redux'
import MultipleImageButtonField from './MultipleImageButtonField'
import SubOptions from './SubOptions'

class TiltLiftControlStep extends Component {

  renderSubOptions(fields) {

    const { stepNumber, open, toggleStepAnimating, triggerOptionChanged, updating } = this.props;
    const { defaultValue, selectedValue, required } = this.props.fields[1];

    return (
      <SubOptions
        key={100000}
        stepNumber={stepNumber}
        fields={[fields]}
        show={this.props.fields[0].selectedValue == null ? false : true}
        stepOpen={open}
        title="Control Positions"
        required={required}
        defaultValue={defaultValue}
        selectedValue={selectedValue}
        toggleStepAnimating={toggleStepAnimating}
        triggerOptionChanged={triggerOptionChanged}
        component="MultipleImageButtonField"
        updating={updating}
      />
    )
  }

  render() {

    const { stepNumber, triggerOptionChanged } = this.props;
    const { displayName, name, choices, defaultValue, selectedValue, required } = this.props.fields[0];

    return (
    	<div class="BlindBuilder__accordion__step__inner-content__fields">
        <MultipleImageButtonField
				  key={0} stepNumber={stepNumber}
				  label={displayName}
				  displayName={displayName}
				  name={name}
				  choices={choices}
				  defaultValue={defaultValue}
				  selectedValue={selectedValue}
          required={required}
				  triggerOptionChanged={triggerOptionChanged}
			  />
        { this.props.fields.length > 1 ? this.renderSubOptions(this.props.fields[1]) : false }
    	</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let local = state.rootReducer.local;
  let remote = state.rootReducer.remote;
  let stepNumber = ownProps.stepNumber;
  let step = remote.steps[stepNumber];

  return {
    stepNumber: stepNumber,
    fields: step.fields,
    open: step.open,
    updating: local.updating
  }
}

export default connect(mapStateToProps)(TiltLiftControlStep);
