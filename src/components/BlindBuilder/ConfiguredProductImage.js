import React from "react"
import { camelCaseToDash } from '../../myPackages/commonFunctions.js'

const ConfiguredProductImage = (props) => {
  return (
    <img class={camelCaseToDash(props.productImage.name)} src={props.productImage.url} alt={props.alt} style={{ opacity: 1, transition: "opacity 0.5s", zIndex: props.zIndex }}  />
  )
}

export default ConfiguredProductImage
