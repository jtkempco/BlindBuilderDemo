import React, { Component } from "react"
import AdditionalCost from './AdditionalCost'
import Description from './Description'
import Note from './Note'
import Checkmark from './Checkmark'
import TopImageContainer from './TopImageContainer'


class MultipleImageButtonField extends Component {
	constructor(props) {
		super(props);
		this.state = {"choices": []};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
    let choices = this.props.choices.filter(choice => { if ( choice.userVisibility == 1 ) return choice} );
    this.setState({ choices: choices })
  }

  componentWillReceiveProps(nextProps) {
    let choices = nextProps.choices.filter(choice => { if ( choice.userVisibility == 1 ) return choice} );
    this.setState({ choices: choices })
  }

	handleClick(e, fieldName, selectedValue) {
		var targetClass = e.target.getAttribute("class");
    if (!/ModalTriggers/.test(targetClass)) {
			this.handleChange(this.props.stepNumber, fieldName, selectedValue);
    }
	}

	handleChange(stepNumber, fieldName, selectedValue) {
		this.props.triggerOptionChanged(stepNumber, fieldName, selectedValue);
	}

	renderContainerTop(choice, field) {
		return (
			<div class="Control--imagebutton__container__top">
				<div class="Control--imagebutton__container__top__wrap">
					<div class="Control--imagebutton__container__top__wrap__inner"><img src={choice.images.primaryImage} /></div>
				</div>
				<img class="child-safe-logo" src={choice.images.childSafeImage} />
			</div>
		)
	}

	renderContainerBottom(choice, props, checked) {

		choice.additionalCost = choice.additionalCost === '$0' ? "NO CHARGE" : choice.additionalCost;

		return (
			<div class="Control--imagebutton__container__bottom">
				<h6 dangerouslySetInnerHTML={{__html: choice.displayName}} />
				<AdditionalCost amount={choice.additionalCost} />
				<Description description={choice.description} />
				<Note text={choice.note} />
				<input type="radio" id={"radio-" + props.name + "-" + props.value} name={props.name} value={choice.value} checked={checked} onChange={() => this.handleChange(name, value, fieldNumber)} />
			</div>
		)
	}

	render() {
		return (
			<div class="Field Field--multiple-image-button">
				<label htmlFor={"multiple-image-button-" + this.props.name} class="Field__label Field--multiple-image-button__label" dangerouslySetInnerHTML={{__html: this.props.label}} />
				<span class={"Field--multiple-image-button__control-group items-" + this.state.choices.length}>
					{this.state.choices.map((choice, index) => {
						let showImage = choice.images.length < 2 || choice.images.primaryImage == null || choice.images.primaryImage == '' ? false : true;
						let checked = this.props.selectedValue === choice.value ? true : false;
						return (
							<div class={"Control Control--imagebutton " + (choice.userDisplay == 1 ? "show" : "disabled-field")} onClick={(e) => this.handleClick(e, this.props.name, choice.value)} key={index}>
								<div class={"Control__container  Control--imagebutton__container " + ( checked ? 'selected' : '' )}>
									<span class="Control__container__frame Control__container__frame--top"></span>
									<span class="Control__container__frame Control__container__frame--bottom"></span>
									<span class="Control__container__frame Control__container__frame--left"></span>
									<span class="Control__container__frame Control__container__frame--right"></span>
									<Checkmark />
									{ showImage ? this.renderContainerTop(choice) : false }
									{this.renderContainerBottom(choice, this.props, checked)}
								</div>
							</div>
						)
					})}
				</span>
			</div>
		)
	}
}

export default MultipleImageButtonField
