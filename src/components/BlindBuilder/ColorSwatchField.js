import React from "react"
import ColorSwatchCategory from './ColorSwatchCategory'
import { filterByObjectProp } from '../../myPackages/commonFunctions.js'

const ColorSwatchField = (props) => {
  const getCategories = ( property, choices ) => {
    let categories = [];
    let tags = filterByObjectProp(property, choices);

  
    for( var i=0; i<tags.length; i++ ) {
        let category = Object.assign({}, {"index": i}, {"name": tags[i]}, {"choices": choices.filter(category => Object.keys(category).some(k => category[property].toString().toLowerCase().indexOf( tags[i].toLowerCase() ) !== -1))});
        categories.push(category);
    }
    
    return categories;
  }

  const choices = props.choices.filter(choice => { if ( choice.userVisibility == 1 ) return choice} );
  const categories = getCategories('category', choices);
  const field = {name: props.name, selectedValue: props.selectedValue};

  return (
    <div class="Field Field--color-swatch">
      <label for="color-swatch-color" class="Field__label Field--color-swatch__label">{props.label}</label>
      <span>
        {categories.map(category => {
          return <ColorSwatchCategory key={category.index} field={field} stepNumber={props.stepNumber} triggerOptionChanged={props.triggerOptionChanged} {...category} />
        })}
      </span>
    </div>
  )
}

export default ColorSwatchField;

