import React from "react"

const Note = (props) => {
  if( props.text != null && props.text.length > 5 ){
    return <p class="note"><strong>Note:</strong>{" " + props.text}</p>
  }
  return (null);
}

export default Note
