import React, { Component } from "react"
import { findDOMNode } from "react-dom"
import $ from 'jquery'
import { connect } from 'react-redux'
import TextInputField from './TextInputField'

class RoomLabelStep extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id = 0;
    let field = this.props.fields[id];
    field.choices = [{"id":0,"name":"RoomLabel","displayName":"Room Label","maxLength":14,"minLength":0,"tabIndex":1,"type":"text","placeHolder":""}]
    const choice = field.choices.id;

    return (
    	<div class="BlindBuilder__accordion__step__inner-content__fields">
        <span>
          <TextInputField
            key={id}
            { ...choice }
            stepNumber={this.props.stepNumber}
            fieldID={field.id}
            choices={field.choices}
            displayName={field.displayName}
            label={field.displayName}
            selectedValue={field.selectedValue}
            open={this.props.open}
            triggerOptionChanged={this.props.triggerOptionChanged}
         />
        </span>
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
      stepName: step.name,
      fields: step.fields,
      open: step.open
  }
}

export default connect(mapStateToProps)(RoomLabelStep);
