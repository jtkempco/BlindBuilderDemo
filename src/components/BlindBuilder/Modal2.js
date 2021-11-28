import React, { Component } from "react"
import ReactDOM from 'react-dom'
import OrangeButtonLink from './OrangeButtonLink'
import PropTypes from 'prop-types'
import IncompatibilityMessage from './IncompatibilityMessage'
import { Scrollbars } from 'react-custom-scrollbars'

const modalRoot = document.getElementById('modal-container')

class Modal2 extends Component {
  constructor(props) {
    super(props);
    this.state = { error : null, bemModifier: props.bemModifier, messages: props.messages }
  }

  render() {
    return ReactDOM.createPortal(
      <div data-reactroot="" class={"Modal Modal--" + this.state.bemModifier + " open has-confirm"}>
    		<div class="Modal__background"></div>
    		<div class="Modal__content">
          <Scrollbars autoHeight={true} autoHeightMax="80vh" autoHeightMin={0} hideTracksWhenNotNeeded={true} tagName="div" thumbMinSize={30} autoHide={false}>
            <div class="Modal__content__wrapper">
              <IncompatibilityMessage { ...this.state } />
            </div>
          </Scrollbars>
    			<span class="Modal__content__close">
    				<div class="x-icon close" onClick={this.props.onClose}><span class="h"></span><span class="v"></span></div>
    			</span>
          <OrangeButtonLink buttonText="Ok" shortText="Ok" href="#" inverse={false} onClick={this.props.onClose} extraClassNames="" />
        </div>
    	</div>,
      modalRoot
    )
  }
}

Modal2.propTypes = {
  onClose: PropTypes.func,
  bemModifier: PropTypes.string,
  messages: PropTypes.array
}

export default Modal2
