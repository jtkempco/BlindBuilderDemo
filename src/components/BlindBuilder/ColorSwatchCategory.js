import React, { Component } from "react"
import Checkmark from './Checkmark'
import AdditionalCost from './AdditionalCost'
//import PropTypes from 'prop-types'

class ColorSwatchCategory extends Component {
  constructor(props) {
		super(props);
		this.handelClick = this.handelClick.bind(this);
    this.onChange = this.onChange.bind(this);
    //this.state = {"selectedValue": props.field.selectedValue};
	}

	handelClick(fieldName, selectedValue) {
    this.onChange(this.props.stepNumber, fieldName, selectedValue);
    //this.props.triggerOptionChanged(this.props.stepNumber, fieldName, selectedValue);
    //this.setState({selectedValue: selectedValue});
	}

  onChange(stepNumber, fieldName, selectedValue) {
    this.props.triggerOptionChanged(stepNumber, fieldName, selectedValue);
	}

  render() {
    const props = this.props;
    const field = props.field;
    const additionalCost = ( field.name === 'Tape' ) ? <AdditionalCost amount={'ADD ' + props.choices[0].additionalCost} /> : null;

    return (
      <div class="Field--color-swatch__category">
        <h5 key={props.name}>{props.name}</h5>
        {additionalCost}
        <ul class="Field--color-swatch__category__list">
          {props.choices.map((choice, index) => {
              let checked = field.selectedValue === choice.value ? true : false;
              let selected = checked ? 'selected' : '';
              choice.style = { backgroundImage: 'url(' + choice.images.primaryImage + ')' };

              return (
                <li key={index} onClick={() => this.handelClick(field.name, choice.value)} data-category={choice.category}>
                  <div class={"ColorSwatch Control Control--colorswatch show " + selected}>
                    <span class="ColorSwatch__sample" style={choice.style} >
                      <Checkmark />
                    </span>
                    <label class="ColorSwatch__label">{choice.displayName}<hr /></label>
                    <input type="radio" value={choice.value} name={field.name} checked={checked} onChange={(e) => this.onChange()}/>
                  </div>
                </li>
              )
          })}
        </ul>
      </div>
    )
  }
}

export default ColorSwatchCategory;
