import React, { Component } from "react"
import { findDOMNode } from "react-dom"
import $ from 'jquery'
import SingleTextButtonField from './SingleTextButtonField'
import MultipleImageButtonField from './MultipleImageButtonField'
import ColorSwatchField from './ColorSwatchField'
import HorizontalLineArrowIcon from './HorizontalLineArrowIcon'

class SubOptions extends Component {
	constructor(props) {
    super(props);
  }

	toggle( updating, show ) {
		if ( !updating ) {
			var options = {
				start: function() {
					this.props.stepOpen && this.props.toggleStepAnimating(!0)
				},
				complete: function() {
					this.props.stepOpen && this.props.toggleStepAnimating(!1)
				}
			}
		  show ? $(el).slideDown(options) : $(el).slideUp(options)
		}
	}

	componentDidMount() {
		const el = findDOMNode(this.suboptions);
		if( this.props.show ) {
				$(el).slideDown(400);
			}else{
				$(el).slideUp(400);
			}
	}

	componentWillUpdate(nextProps) {
		const el = findDOMNode(this.suboptions);
		let next = $(el).css('display') === "none" ? "hide" : "show";
		let current = this.props.show ? "show" : "hide";

		if( !nextProps.updating && current !== next ){
			if( this.props.show ) {
				$(el).slideDown(300);
			}else{
				$(el).slideUp(300);
			}
		}
	}

	render() {

		let props = this.props;

		const Components = {
			"SingleTextButtonField": SingleTextButtonField,
			"MultipleImageButtonField": MultipleImageButtonField,
			"ColorSwatchField": ColorSwatchField
		}

		const Component = Components[this.props.component];
		const title = props.title != null ? <h6>{props.title}</h6> : null;

		return (
			<div ref={node => this.suboptions = node} class={"SubOptions " + (props.show ? "show" : "hide")}>
				<HorizontalLineArrowIcon />
				{title}
				<div class="SubOptions__fields">
					{props.fields.map((field, index) => {
						return <Component key={index} stepNumber={props.stepNumber} choices={field.choices} className="" defaultValue={props.defaultValue} displayName={field.displayName} id={field.priority} label={field.displayName} name={field.name} selectedValue={field.selectedValue} triggerOptionChanged={props.triggerOptionChanged} />
					})}
				</div>
			</div>
		)
	}
}

export default SubOptions
