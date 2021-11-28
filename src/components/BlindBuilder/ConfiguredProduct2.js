import React from "react"
import { camelCaseToDash } from '../../myPackages/commonFunctions.js'

const ConfiguredProductImage = (props) => {
  return <img class={camelCaseToDash(props.image.name)} src={props.image.url} alt={props.alt} style={{zIndex: props.zIndex}} />
}

const ConfiguredProduct2 = (props) => {
  return (
    <div class="ConfiguredProduct">
      {props.images.map((image, index) => {
        return <ConfiguredProductImage key={index} image={image} alt={props.title} zIndex={index + 1} />
      })}
    </div>
  )
}

export default ConfiguredProduct2
