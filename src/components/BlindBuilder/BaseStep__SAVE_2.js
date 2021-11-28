import React, { Component } from "react"
import { findDOMNode } from "react-dom"
import { connect } from 'react-redux'
import {triggerStepToggled, triggerOptionChanged, toggleStepAnimating, setStepAnimating, onToggleNextStep, triggerRoomLabelChanged} from '../../actions/index'
import $ from 'jquery'
import scrollToElement from 'scroll-to-element'
import StepHeader from './StepHeader'
import StepTitle from './StepTitle'
import StepIntroText from './StepIntroText'
import ContinueButton from './ContinueButton'
import MeasureAndMountingStep from './MeasureAndMountingStep'
import InnerStep from './InnerStep'
import CordStep from './CordStep'
import ColorStep from './ColorStep'
import TiltLiftControlStep from './TiltLiftControlStep'
import DecorativeClothTapeStep from './DecorativeClothTapeStep'
import RoomLabelStep from './RoomLabelStep'
import StepNote from './StepNote'
import Modal from './Modal_TEST'
import PropTypes from 'prop-types'
import { camelCaseToDash } from '../../myPackages/commonFunctions.js'


class BaseStep extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal : false, href: null, bemModifier: null }
    this.launchModal = this.launchModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  launchModal(e) {
    var targetClass = e.target.getAttribute("class");
    if (/ModalTriggers/.test(targetClass)) {
      e.preventDefault(), e.stopPropagation();
      var href = e.target.getAttribute("data-href");
      //(0, _launchAsyncModal2.default)(href, "blindbuilder")
      console.log("ModalTriggers TRUE!!");
      console.log( "href: " + href );

      this.setState({ showModal: true, href: href, bemModifier: "blindbuilder Modal--async", content: "<div class=\"LoadingIcon top-50\"></div>"})

    }
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  getStepFields( name ) {
    if ( name === 'color' || name === 'valance' || name === 'liftControlPosition' || name === 'drawStackType' || name === 'pointyTextButton' ) {
      return "InnerStep";
    }else{
      return name.charAt(0).toUpperCase() + name.slice(1) + "Step";
    }
  }

  render() {
    let props = this.props;
    const Components = {
      "MeasureAndMountingStep": MeasureAndMountingStep,
      "InnerStep": InnerStep,
      "CordStep": CordStep,
      "RoomLabelStep": RoomLabelStep,
      "DecorativeClothTapeStep": DecorativeClothTapeStep,
      "TiltLiftControlStep": TiltLiftControlStep,
      "ColorStep": ColorStep
    }

    this.stepName = this.props.name.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    const classes = ["BlindBuilder__accordion__step", "BlindBuilder__accordion__step--" + this.stepName, this.props.open ? "open" : "closed", this.props.disabled ? "disabled" : "enabled", this.props.complete ? "complete" : "incomplete"].join(" ");
    const StepFields = Components[this.getStepFields(this.props.name)];
    const overlay = props.updating  ? <div class="overlay-screen"><div class="LoadingIcon top-50" /></div> : null;
    const button = this.props.name === 'roomLabel' ? null : <ContinueButton complete={props.complete} disabled={props.disabled} open={props.open} stepNumber={props.stepNumber} onToggleNextStep={this.props.onToggleNextStep} />;

    const modal = this.state.showModal ? <Modal onClose={this.handleCloseModal} {...this.state} /> : null;

    console.log(StepFields);

    return (
      <div key={props.stepNumber} ref={node => this.step = node} class={classes}>
        {modal}
        <StepHeader {...props} />
        <div class="BlindBuilder__accordion__step__inner-content" onClick={this.launchModal}>
          {overlay}
          <StepTitle title={props.title} />
          <StepIntroText introText={props.introText} />
          <StepFields key={props.stepNumber} stepNumber={props.stepNumber} triggerOptionChanged={this.props.triggerOptionChanged} />
          <StepNote note={ props.note == null ? "" : props.note } />
          {button}
        </div>
      </div>
    )
  }
}

BaseStep.propTypes = {
  totalSteps: PropTypes.number,
  complete: PropTypes.bool,
  updating: PropTypes.bool,
  toggleStepAnimating: PropTypes.func,
  triggerOptionChanged: PropTypes.func,
  showLoader: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  let local = state.rootReducer.local;
  let remote = state.rootReducer.remote;

  let stepNumber = ownProps.stepNumber;
  let step = remote.steps[stepNumber];

    return {
        complete: step.complete,
        disabled: step.disabled,
        displayName: step.displayName,
        fields: step.fields,
        id: step.id,
        introText: step.introText,
        name: step.name,
        note: step.note,
        open: step.open,
        title: step.title,
        updating: local.updating,
        animating: local.animating,
        selectedValue: step.selectedValue
    }
}

const mapDispatchToProps = {
  triggerStepToggled,
  triggerOptionChanged,
  toggleStepAnimating,
  setStepAnimating,
  onToggleNextStep,
  triggerRoomLabelChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseStep);
