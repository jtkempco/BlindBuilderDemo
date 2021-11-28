import React, { Component } from "react"
import ConfiguredProductImage from 'react-slick'

class ProductSlide extends Component {

  render() {
    let props = this.props;
    return (
      <div class="ConfiguredProduct" {...props} >
        {props.displayImages.map((displayImage, index) => {
          return <ConfiguredProductImage {...displayImage} />
        })}
      </div>
      )
    }
  }


export default ProductSlide
