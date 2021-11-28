import React, { Component } from "react"

class PointyTextButtonField extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedValue: null};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

  	componentWillReceiveProps(nextProps) {
		this.setState({ selectedValue: nextProps.selectedValue });
  	}

	handleClick(fieldName, selectedValue) {
		this.setState({selectedValue: selectedValue});
		this.handleChange(this.props.stepNumber, fieldName, selectedValue);
	}

	handleChange(stepNumber, fieldName, selectedValue) {
		this.props.triggerOptionChanged(stepNumber, fieldName, selectedValue);
	}

	render() {
		 
		const { label, name, choices, value, selectedValue }  = this.props;

		return (
			<div class="Field Field--pointy-text-button">
				<label htmlFor={"pointy-text-button-" + name} class="Field--pointy-text-button__label" dangerouslySetInnerHTML={{__html: label}} />
				<span class="Field--pointy-text-button__control-group">
					<div class="Field--pointy-text-button__control-group__buttons">
					{choices.map(choice => (
						<div class={"Control Control--pointytextbutton " + (choice.userDisplay == 1 ? "show" : "disabled-field")} key={choice.value + "-pointytextbtn"} onClick={(e) => this.handleClick(name, choice.value)}>
							<div class={"Control__container Control--pointytextbutton__container " + ( selectedValue === choice.value ? 'selected' : '' )}>
								<label for={"radio-"+name+"-"+choice.value}>{choice.displayName}</label>
								<input type="radio" id={"radio-"+name+"-"+choice.value} name={name} value={choice.value} checked={selectedValue === choice.value ? true : false} />
								<span class="Control--pointytextbutton__triangle"></span>
							</div>
						</div>
					))}
					</div>
					<div class={"Field--pointy-text-button__control-group__images " + ( this.state.selectedValue != null ? "open" : "" )}>
					{choices.map(choice => (
						<div class={"Field--pointy-text-button__control-group__images__choice " + ( selectedValue === choice.value ? 'selected' : '' )} key={choice.value + "-image"}>
            				<div class="Field--pointy-text-button__control-group__images__choice__description">{choice.description}</div>
            				<div class="Field--pointy-text-button__control-group__images__choice__image" style={{ backgroundImage: 'url(' + choice.images.primaryImage + ')' }}></div>
         				</div>
					))}
      				</div>
				</span>
			</div>
		)
	}
}


export default PointyTextButtonField
