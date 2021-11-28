import React, { Component } from "react"
import { toFraction } from '../../myPackages/commonFunctions.js'

class SelectField extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(selectedValue) {
		this.props.triggerOptionChanged(this.props.stepNumber, this.props.name, selectedValue);
	}

	render() {
		let props = this.props;
		let value = this.props.selectedValue == null ? this.props.defaultValue : this.props.selectedValue;
		let display = value > 0 && value < 1 ? toFraction(value) : value;
		let style = {opacity: 0, position: 'absolute', top: '0px', left: '0px', zIndex: 1, width: '100%', height: '100%', border: '1px solid rgb(255, 255, 255)'};

		return (
			<div class="Field Field--select">
				<label htmlFor={"Select-" + props.name} class="Field__label Field--select__label" dangerouslySetInnerHTML={{__html: props.label}} />
				<span>
					<div className="Control Control--select">
						<div className="Control__container Control--select__container">
							<select ref={props.name} name={props.name} id={"Select-" + props.name} value={value} onChange={(e) => this.handleChange(e.target.value)} style={style}>
							{props.choices.map((choice, index) => <option key={index} value={choice.value} dangerouslySetInnerHTML={{__html: choice.displayName}} />)}
							</select>
							<div className="Control__container__facade Control--select__container__facade">
								<div className="display">{display}</div>
								<div className="arrow"><i><span className="MoreArrowIcon"><svg viewBox="0 0 7.2 12.9"><path fill="#4c4c4c" d="M-.2 12.9v-7h1v4.7L5.7 6 .4.7l.7-.7 6 6.1z"></path></svg></span></i></div>
							</div>
						</div>
					</div>
				</span>
			</div>
		)
	}
}


export default SelectField;
