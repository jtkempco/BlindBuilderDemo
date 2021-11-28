import React from "react"
import ConfiguredProductImage from './ConfiguredProductImage'

const ConfiguredProduct = (props) => {
  return (
    <div class="ConfiguredProduct">
      {props.productImages.map((productImage, index) => {
        return <ConfiguredProductImage key={index} productImage={productImage} alt={index === 0 ? props.productName : null} zIndex={index + 1} style={props.style} />
      })}
    </div>
  )
}

export default ConfiguredProduct
