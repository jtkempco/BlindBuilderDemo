import React, { Component } from "react"
import { connect } from 'react-redux'
import { findDOMNode } from "react-dom"
import Sticky from 'react-stickynode'
import PropTypes from 'prop-types'
import CanvasCarousel from './CanvasCarousel'
import CanvasNav from './CanvasNav'


class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedSlide: this.props.selectedSlide };
    this.onLoad = this.onLoad.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
  }

  componentDidMount() {
    this.forceUpdate()
  }

  componentDidUpdate() {
    //this.carousel.slideTo(this.state.selectedSlide), window.scrollTo(window.scrollX || window.pageXOffset, window.scrollY || window.pageYOffset - 1), window.scrollTo(window.scrollX || window.pageXOffset, window.scrollY || window.pageYOffset + 1)
    //this.carousel.slickGoTo(this.state.selectedSlide)
  }

  changeSlide(slide) {
    this.setState({ selectedSlide: slide });
  }

  getProductNavImage() {
    try {
        return this.props.productImages.find(function(x) {
            return "colorAndMount" === x.name
        }).url
    } catch (e) {
        return null
    }
  }

  getLifestyleNavImages() {
    return this.props.lifestyleImages ? this.props.lifestyleImages.map(function(x) {
        return x.thumb
    }) : []
  }

  onLoad(e) {
    this.forceUpdate()
  }

  shouldFreeze() {

  }

  render() {

    const carouselSettings = {
      arrows: false,
      autoplay: false,
      autoplaySpeed: 10000,
      className: 'Carousel--Blindbuilder carousel',
      dots: false,
      draggable: false,
      fade: true,
      infinite: false,
      nextArrow: {},
      prevArrow: {},
      slickGoTo: 0,
      sliderClass: null,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500
    }

    const stickySettings = {
      activeClass: 'active',
      bottomBoundary: '#blindbuilder-area',
      enableTransforms: true,
      enabled: true,
      onStateChange: null,
      releasedClass: 'released',
      shouldFreeze: this.shouldFreeze(),
      top: 20
    }

    return (
      <div ref={node => this.carousel = node} class="BlindBuilder__canvas" onLoad={this.onLoad}>
        <Sticky ref={node => this.sticky = node} {...stickySettings}>
        <div class="BlindBuilder__canvas--wrap">
          <CanvasCarousel {...this.props} carouselSettings={carouselSettings} />
          <CanvasNav images={this.getProductNavImage()} selectedSlide={this.state.selectedSlide} onClick={(e) => this.changeSlide()} />
        </div>
        </Sticky>
      </div>
    )
  }
}

Canvas.propTypes = {
  productImages: PropTypes.array,
  lifestyleImages: PropTypes.array,
  productName: PropTypes.string,
  selectedSlide: PropTypes.number,
  stepAnimating: PropTypes.bool
}

const mapStateToProps = (state) => {
    let local = state.rootReducer.local;
    let remote = state.rootReducer.remote;
    return {
        productImages: remote.displayImages,
        lifestyleImages: remote.lifestyleImages,
        productName: remote.productName,
        selectedSlide: 0,
        stepAnimating: local.updating
    }
}

export default connect(mapStateToProps)(Canvas);
