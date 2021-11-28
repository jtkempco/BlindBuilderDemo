import React from "react"

const StepNote = (props) => {
  if( props.text != null && props.text != "" ){
    return <p class="StepNote">{props.text}</p>
  }
  return (null);
}

export default StepNote
