import React from "react"
import Checkmark from './Checkmark'

const ColorSwatch = (props) => {
  let selected = props.checked ? 'selected' : '';

  const handleClick = (fieldName, selectedValue) => {
    //props.triggerOptionChanged(this.props.stepNumber, fieldName, selectedValue);
  }

  return (
    <div class={"ColorSwatch Control Control--colorswatch show " + selected} data-category={props.category}>
      <span class="ColorSwatch__sample" style={{ backgroundImage: 'url(' + props.images.primaryImage + ')' }} >
        <Checkmark />
      </span>
      <label class="ColorSwatch__label">{props.displayName}<hr /></label>
      <input type="radio" value={props.value} name={props.fieldName} checked={props.checked} />
    </div>
  )
}

export default ColorSwatch;
