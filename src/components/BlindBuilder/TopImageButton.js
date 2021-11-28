import React, { Component } from "react"
import Checkmark from './Checkmark'
import ImageButton from './ImageButton'


class TopImageButton extends Component {
  constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(name, value, fieldNumber) {
    this.props.triggerOptionChanged(name, value, fieldNumber);
	}

  render() {
    let props = this.props;
    let field = props.field;

    const { baseClassName, images } = this.props;
    let showImage = images.length < 2 || images.primaryImage == null || images.primaryImage == '' ? false : true;

    if( showImage ){
        return (
    			<div class="Control--imagebutton__container__top">
    				<div class="Control--imagebutton__container__top__wrap">
    					<div class="Control--imagebutton__container__top__wrap__inner"><img src={props.primaryImage} /></div>
    				</div>
            <img class="child-safe-logo" src={props.childSafeImage} />
    			</div>
    		)
    }
    return (null);
  }
}

export default TopImageButton
