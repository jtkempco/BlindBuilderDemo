import React, { Component } from "react"
import ReactDOM from 'react-dom'
import OrangeButtonLink from './OrangeButtonLink'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'

const modalRoot = document.getElementById('modal-container')

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { error : null, bemModifier: props.bemModifier, content: props.content }
  }

  componentDidMount() {

    var url = pageConfig.baseURL + this.props.href;

    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
          this.setState({ bemModifier: "blindbuilder", content: result.content })
        },
      (error) => {
        this.setState({ error });
      }
    )
  }

  render() {
    return ReactDOM.createPortal(
      <div data-reactroot="" class={"Modal Modal--" + this.state.bemModifier + " open"}>
    		<div class="Modal__background"></div>
    		<div class="Modal__content">
          <Scrollbars autoHeight={true} autoHeightMax="80vh" autoHeightMin={0} hideTracksWhenNotNeeded={true} tagName="div" thumbMinSize={30} autoHide={false}>
            <div class="Modal__content__wrapper" dangerouslySetInnerHTML={{__html: JSON.stringify(this.state.content)}} />
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

Modal.propTypes = {
  onClose: PropTypes.func,
  bemModifier: PropTypes.string
}

export default Modal
