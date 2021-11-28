import React, { Component } from "react"
import { Scrollbars } from 'react-custom-scrollbars'

/*
const ModalAside = (props) => {
  const { title, slug, img, content } = this.props
  return (
    <aside class={"BlindBuilderModal BlindBuilderModal--" + slug}>
      <div class="BlindBuilderModal__image-container">
        <img src={img.url} />
      </div>
      <div class="BlindBuilderModal__copy-container">
        <h4>{title}</h4>
        <div class="BlindBuilderModal-copy-container__body">
    	     {content}
        </div>
     </div>
    </aside>
  )
}
const IncompatibilityMessage = (props) => {
    return (
      <span class="IncompatibilityMessage">
        <p>We encountered an error when building your product:</p>
        <ul>{props.messages.map(messsage => { return <li>{message.body}</li> })}</ul>
        <p>All incompatible options have been unselected. Please reselect your options to complete your purchase.</p>
      </span>
    )
}
*/

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { "contentHeight" : props.contentHeight }

    this.renderThumbHorizontal = this.renderThumbHorizontal.bind(this);
    this.renderThumbVertical = this.renderThumbVertical.bind(this);
    this.renderTrackHorizontal = this.renderTrackHorizontal.bind(this);
    this.renderTrackVertical = this.renderTrackVertical.bind(this);
    this.renderView = this.renderView.bind(this);

    this.container = React.createRef();
  }

  componentDidMount() {
    this.setState({ contentHeight : this.props.contentHeight })
  }

  renderThumbHorizontal() {

  }

  renderThumbVertical() {

  }

  renderTrackHorizontal() {

  }

  renderTrackVertical() {

  }

  renderView({ ...props }) {
    const { contentHeight } = this.state;
    const style = {
      height: "auto",
      maxHeight: "80vh",
      minHeight: 0,
      overflow: "hidden",
      position: "relative",
      width: "100%"
    };
    return (
        <div ref={this.container} {...props} style={{ ...style }} />
    );
  }

  render() {
    return (
      <div data-reactroot="" class="Modal Modal--blindbuilder open">
		    <div class="Modal__background"></div>
		    <div class="Modal__content">
          <Scrollbars
            autoHeight={true}
            autoHeightMax={this.state.contentHeight}
            autoHeightMin={0}
            autoHide={false}
            autoHideDuration={200}
            autoHideTimeout={1000}
            hideTracksWhenNotNeeded={true}
            renderThumbHorizontal={this.renderThumbHorizontal}
            renderThumbVertical={this.renderThumbVertical}
            renderTrackHorizontal={this.renderTrackHorizontal}
            renderTrackVertical={this.renderTrackVertical}
            renderView={this.renderView}
            tagName={"div"}
            thumbMinSize={30}
            universal={true}
          />
        </div>
      </div>
    )
  }
}

export default Modal
