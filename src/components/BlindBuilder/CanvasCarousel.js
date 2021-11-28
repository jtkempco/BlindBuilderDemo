import React, { Component } from "react"
import Slider from 'react-slick'
import { _extends } from '../../myPackages/commonFunctions.js'
import { findDOMNode } from "react-dom"
import $ from 'jquery'
import ConfiguredProduct from './ConfiguredProduct'


class CanvasCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.carouselSettings }
  }

  slideTo(slideNo) {
    this.setState({
        slickGoTo: slideNo
    })
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.settings) {
        var newState = _extends({}, this.state, nextProps.settings);
        this.setState(newState)
    }
  }

  render() {
    let props = this.props;

    const settings = {
      arrows: false,
      autoplay: false,
      autoplaySpeed: 1000,
      centerMode: true,
      className: 'Carousel--Blindbuilder carousel',
      dots: false,
      draggable: false,
      fade: true,
      infinite: false,
      slickGoTo: 0,
      sliderClass: null,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true
    }

    return (
      <div class="Carousel--Blindbuilder">
        <Slider {...this.state }>
          {this.props.productImages == null ? (
              <div class="ConfiguredProduct"></div>
          ) : (
              <ConfiguredProduct {...this.props} />
          )}
        </Slider>
      </div>
    )
  }
}

export default CanvasCarousel
