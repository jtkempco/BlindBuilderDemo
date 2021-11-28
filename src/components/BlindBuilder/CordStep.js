import React, { Component } from "react"
import { connect } from 'react-redux'
import MultipleImageButtonField from './MultipleImageButtonField'
import SubOptions from './SubOptions'

class CordStep extends Component {

  render() {
    let props = this.props;
  	let fields = this.props.fields;

    let CordSystem = fields[0];
    let LiftSystem = fields[1];

    return (
    	<div class="BlindBuilder__accordion__step__inner-content__fields">
        <MultipleImageButtonField
				  key={0}
          stepNumber={props.stepNumber}
				  label={CordSystem.displayName}
				  displayName={CordSystem.displayName}
				  name={CordSystem.name}
				  choices={CordSystem.choices}
				  defaultValue={CordSystem.defaultValue}
				  selectedValue={CordSystem.selectedValue}
				  required="true"
				  triggerOptionChanged={this.props.triggerOptionChanged}
			  />
        <SubOptions
          key={100000}
          stepNumber={props.stepNumber}
          fields={[LiftSystem]}
          show={CordSystem.selectedValue == null ? false : true}
          stepOpen={this.props.open}
          title={LiftSystem.displayName + " Options"}
          required={LiftSystem.required}
          defaultValue={LiftSystem.defaultValue}
				  selectedValue={LiftSystem.selectedValue}
          toggleStepAnimating={this.props.toggleStepAnimating}
          triggerOptionChanged={this.props.triggerOptionChanged}
          component="MultipleImageButtonField"
          updating={this.props.updating}
        />
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

export default connect(mapStateToProps)(CordStep);
