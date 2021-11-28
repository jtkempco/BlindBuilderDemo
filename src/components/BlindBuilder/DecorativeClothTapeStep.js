import React, { Component } from "react"
import { connect } from 'react-redux'
import MultipleChoiceTextButton from './MultipleChoiceTextButton'
import SubOptions from './SubOptions'

class DecorativeClothTapeStep extends Component {
  render() {
    let props   = this.props;
    let fields  = this.props.fields;
    let AddTape = fields[0];
    let Tape    = fields[1];

    return (
    	<div class="BlindBuilder__accordion__step__inner-content__fields">
        <MultipleChoiceTextButton
				  key={0}
				  fieldNumber={0}
          stepNumber={props.stepNumber}
				  label={AddTape.displayName}
				  displayName={AddTape.displayName}
				  name={AddTape.name}
				  choices={AddTape.choices}
				  defaultValue={AddTape.defaultValue}
				  selectedValue={AddTape.selectedValue}
				  required={AddTape.required}
				  triggerOptionChanged={this.props.triggerOptionChanged}
			  />
        <SubOptions
          key={100000}
          fieldNumber={1}
          stepNumber={props.stepNumber}
          fields={[Tape]}
          show={AddTape.selectedValue == null || AddTape.selectedValue === 'NO TAPE' ? false : true}
          stepOpen={this.props.open}
          title={null}
          required={Tape.required}
          defaultValue={Tape.defaultValue}
          selectedValue={Tape.selectedValue}
          triggerOptionChanged={this.props.triggerOptionChanged}
          component="ColorSwatchField"
          updating={this.props.updating}
        />
    	</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let local       = state.rootReducer.local;
  let remote      = state.rootReducer.remote;
  let stepNumber  = ownProps.stepNumber;
  let step        = remote.steps[stepNumber];

  return {
    stepNumber: stepNumber,
    fields: step.fields,
    open: step.open,
    updating: local.updating
  }
}

export default connect(mapStateToProps)(DecorativeClothTapeStep);
