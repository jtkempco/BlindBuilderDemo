import React, { Component } from "react"
import { connect } from 'react-redux'
import Canvas from './Canvas'
import Accordion from './Accordion'
import PriceBar from './PriceBar'
import Modal2 from './Modal2'


class BlindBuilderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal : false, href: null, bemModifier: null, messages: null }
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

    componentWillReceiveProps(nextProps) {
      if(nextProps.messages.length > 0)
        this.setState({showModal: true, bemModifier: "Message", messages: nextProps.messages});
    }

    handleCloseModal() {
      this.setState({ showModal: false })
    }

    render() {

      const modal = this.state.showModal ? <Modal2 onClose={this.handleCloseModal} {...this.state} /> : null;

      return (
        <div class={"BlindBuilder " +  (this.props.started ? "started" : "") } data-reactroot="">
          {modal}
          {this.props.showLoaderWrapper &&
            <div class="overlay-screen" style={{width:'1920px'}}><div class="LoadingIcon responsive-top"></div></div>
          }
          <div class="BlindBuilder__top">
            <Canvas />
            <Accordion />
          </div>
            <PriceBar />
        </div>
      )
   }
}

const mapStateToProps = (state) => {

    const local = state.rootReducer.local;
    const remote = state.rootReducer.remote;

    return {
        started: local.started,
        showLoader: false,
        showLoaderWrapper: remote.showLoaderWrapper,
        messages: remote.messages,
        steps: remote.steps
    }
}

export default connect(mapStateToProps)(BlindBuilderWrapper)
