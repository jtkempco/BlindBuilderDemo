import React, { Component } from "react"
import Slider from 'react-slick'
import { findDOMNode } from "react-dom"
import $ from 'jquery'
import ConfiguredProduct from './ConfiguredProduct'


class CanvasCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {"updating": props.updating};
    //this.value = this.value.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    const el = findDOMNode(this.configureProduct);
		if( this.props.displayImages != null && !this.state.updating ) {
      var that = this;
      that.setState({ updating: true });
			$(el).find('img').fadeOut(500, function(){
        $(el).find('img').fadeIn(1000, function(){
          that.setState({ updating: false });
        });
      });
    }
  }

  render() {
    let props = this.props;
    let settings = {
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
    };

    if( props.displayImages == null ){
      return (
        <div class="Carousel--Blindbuilder">
          <Slider {...settings}>
            <div class="ConfiguredProduct"></div>
          </Slider>
  			</div>
      )
    }else{
      return (
        <div class="Carousel--Blindbuilder">
          <Slider {...settings}>
            <ConfiguredProduct {...props} />
          </Slider>
  			</div>
      )
    }
  }
}

export default CanvasCarousel
