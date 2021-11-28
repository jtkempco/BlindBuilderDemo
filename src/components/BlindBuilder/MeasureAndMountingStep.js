import React, { Component } from "react"
import { connect } from 'react-redux'
import SelectField from './SelectField'
import MultipleImageButtonField from './MultipleImageButtonField'
import SubOptions from './SubOptions'

class MeasureAndMountingStep extends Component {
  constructor(props) {
    super(props);
  }

  renderSubOptions(fields) {
    return (
      <SubOptions
        key={100000}
        stepNumber={this.props.stepNumber}
        fields={fields}
        show={this.props.fields[4].selectedValue === 'OB' ? true : false}
        stepOpen={this.props.open}
        title="Optional Accessories"
        toggleStepAnimating={this.props.toggleStepAnimating}
        triggerOptionChanged={this.props.triggerOptionChanged}
        component="SingleTextButtonField"
        updating={this.props.updating}
      />
    )
  }

  render() {
  	let props = this.props;
  	let fields = this.props.fields;
  	let selectFields = this.props.fields.filter((field, index) => { if ( index <= 3 ) return field} );
  	let mounting = this.props.fields[4];

    let showSubOptions = this.props.fields.length > 5 ? true : false;
    let subOptions = this.props.fields.length === 6 ? [fields[5]] : [fields[5], fields[6]];

    return (
    	<div class="BlindBuilder__accordion__step__inner-content__fields">
    		{selectFields.map((selectField, index) =>
    			<SelectField
					 key={index}
           stepNumber={this.props.stepNumber}
					 fieldNumber={index}
					 label={index % 2 === 0 ? selectField.displayName : null}
					 name={selectField.name}
					 choices={selectField.choices}
					 defaultValue={selectField.defaultValue}
					 selectedValue={selectField.selectedValue}
					 required="true"
           triggerOptionChanged={this.props.triggerOptionChanged}
				  />
			  )}
		    <MultipleImageButtonField
				  key={4}
          stepNumber={this.props.stepNumber}
				  fieldNumber={4}
				  label={mounting.displayName}
				  displayName={mounting.displayName}
				  name={mounting.name}
				  choices={mounting.choices}
				  defaultValue={mounting.defaultValue}
				  selectedValue={mounting.selectedValue}
				  required="true"
          triggerOptionChanged={this.props.triggerOptionChanged}
			  />
        { showSubOptions ? this.renderSubOptions(subOptions) : false }
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

export default connect(mapStateToProps)(MeasureAndMountingStep);
