import React, { Component } from "react"
import AdditionalCost from './AdditionalCost'
import Description from './Description'
import Note from './Note'
import Checkmark from './Checkmark'
import TopImageContainer from './TopImageContainer'

class MultipleChoiceTextButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
/*
	componentDidMount() {
		this.props.filteredChoices = this.props.choices.filter(choice => { if ( choice.userDisplay == 1 && choice.userVisibility == 1 ) return choice} );
  }

  componentWillReceiveProps(nextProps) {
		nextProps.filteredChoices = nextProps.choices.filter(choice => { if ( choice.userDisplay == 1 && choice.userVisibility == 1 ) return choice} );
  }
*/
	handleClick(fieldName, selectedValue) {
		this.handleChange(this.props.stepNumber, fieldName, selectedValue);
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
		return (
			<div class="Control--imagebutton__container__bottom">
				<h6>{choice.displayName}</h6>
				<AdditionalCost amount={choice.additionalCost} />
				<Description description={choice.description} />
				<Note text={choice.note} />
				<input type="radio" id={"radio-" + props.name + "-" + props.value} name={props.name} value={choice.value} checked={checked} onChange={(e) => this.handleChange(name, e.target.value, fieldNumber)} />
			</div>
		)
	}

	render() {
		let props 	= this.props;
		let choices = props.choices.filter(choice => { if ( choice.userDisplay == 1 && choice.userVisibility == 1 ) return choice} );

		return (
			<div class="Field Field--multiple-choice-text-button">
				<label htmlFor={"multiple-choice-text-button-" + props.name} class="Field__label Field--multiple-choice-text-button__label" dangerouslySetInnerHTML={{__html: props.label}} />
				<span class={"Field--multiple-choice-text-button__control-group"}>
					{choices.map((choice, index) => {
						let primaryImage = choice.images.length < 2 || choice.images.primaryImage == null || choice.images.primaryImage == '' ? undefined : choice.images.primaryImage;
						let childSafeImage = choice.images.length == 2 && choice.images.childSafeImage != null ? choice.images.primaryImage : undefined;

						//let primaryImage = choice.images.length > 2 && choice.images.primaryImage != null && choice.images.primaryImage != '' ?
						let checked = props.selectedValue === choice.value ? true : false;
						let selected = checked ? 'selected' : '';
						return (
							<div class="Control Control--imagebutton show" onClick={() => this.handleClick(props.name, choice.value)} key={index}>
								<div class={"Control__container  Control--imagebutton__container " + selected}>
									<span class="Control__container__frame Control__container__frame--top"></span>
									<span class="Control__container__frame Control__container__frame--bottom"></span>
									<span class="Control__container__frame Control__container__frame--left"></span>
									<span class="Control__container__frame Control__container__frame--right"></span>
									<Checkmark />
									<TopImageContainer primaryImage={primaryImage} childSafeImage={childSafeImage} />
									{this.renderContainerBottom(choice, props, checked)}
								</div>
							</div>
						)
					})}
				</span>
			</div>
		)
	}
}

export default MultipleChoiceTextButton;
