import React from "react"
import AdditionalCost from './AdditionalCost'
import ColorSwatch from './ColorSwatch'
import PropTypes from 'prop-types'

const ColorSwatchCategory = (props) => {
  const additionalCost = ( props.field.name === 'Tape' ) ? <AdditionalCost amount={'ADD ' + props.choices[0].additionalCost} /> : null;

  const handleClick = (fieldName, selectedValue) => {
    props.triggerOptionChanged(props.stepNumber, fieldName, selectedValue);
  }

  return (
    <div class="Field--color-swatch__category">
      <h5 key={props.name}>{props.name}</h5>
      {additionalCost}
      <ul class="Field--color-swatch__category__list">
        {props.choices.map((choice, index) => {
          choice.checked = props.field.selectedValue === choice.value ? true : false;
          return (
            <li key={index} onClick={() => handleClick(props.field.name, choice.value)}>
              <ColorSwatch
                value={choice.value}
                category={choice.category}
                displayName={choice.displayName}
                images={choice.images}
                checked={choice.checked}
                fieldName={props.field.name}
                triggerOptionChanged={props.triggerOptionChanged} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ColorSwatchCategory;
