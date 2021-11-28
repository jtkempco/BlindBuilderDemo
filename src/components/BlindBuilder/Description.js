import React from "react"

const Description = (props) => {
  return (
    <p class="description" dangerouslySetInnerHTML={{__html: props.description}} />
  )
}

export default Description
