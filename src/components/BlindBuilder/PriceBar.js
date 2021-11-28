import React, { Component } from "react"
import { connect } from 'react-redux'
import { findDOMNode } from "react-dom"
import Incrementer from './Incrementer'
import OrangeButtonLink from './OrangeButtonLink'
import LoadingCircle from './LoadingCircle'
import PropTypes from 'prop-types'
import { triggerQuantityChanged, triggerAddingToCart, placeItemInCart } from '../../actions/index'


class PriceBar extends Component {
  constructor(props) {
    super(props);
    this.state = { "price": props.price, "quantity": props.quantity, "totalPrice": props.totalPrice, "started": props.started, "fullState": props.fullState };
    this.changeQuantity = this.changeQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    let totalPrice = (isNaN(this.props.totalPrice * this.props.quantity) ? 0 : (this.props.totalPrice * this.props.quantity));
    this.setState({ totalPrice: totalPrice, quantity: this.props.quantity, price: this.props.price, started: this.props.started, fullState: this.props.fullState });
  }

  componentWillReceiveProps(nextProps) {
    let totalPrice = (isNaN(nextProps.totalPrice * nextProps.quantity) ? 0 : (nextProps.totalPrice * nextProps.quantity));
    this.setState({ totalPrice: totalPrice, quantity: nextProps.quantity, price: nextProps.price, started: nextProps.started, fullState: nextProps.fullState });
  }

  isReadyToSubmit() {
    if (0 === this.props.fullState.steps.length) return !1;
      var roomLabelStep = this.props.fullState.steps.slice(-1).pop();
      if (roomLabelStep.disabled || !roomLabelStep.complete) return !1;
      var incompleteSteps = this.props.fullState.steps.filter(function(step) {
          return !step.disabled && !step.complete
      });
      try {
          return 0 === incompleteSteps.length
      } catch (err) {
          return !1
      }
  }

  addToCart(e) {
    e.preventDefault(), this.isReadyToSubmit() && !this.props.addingToCart && this.props.placeItemInCart(this.props.fullState, this.state.started, this.props.editing)
  }

  scrollTo(e) {
    console.log("ScrollTo clicked!!");
    //this.setState({ started: true });
  }

  changeQuantity() {

  }

  render() {
    const cartButtonDisabled = !this.isReadyToSubmit();
    const { updating, editing, addingToCart, triggerQuantityChanged } = this.props;

    return (
      <aside ref={node => this.node = node} class={"PriceBar " + (this.state.started ? "started" : "")}>
        <ul>
          <li class="quantity">
            <Incrementer autoFill="true" errorMessages={{}} max="20" min="1" patern=".*" type="number" name="quantity" quantity={this.state.quantity} triggerQuantityChanged={triggerQuantityChanged} />
          </li>
          <li class="price">
            <strong>PRODUCT PRICE</strong>
            {(this.state.started ? "$" : "From $") + this.state.totalPrice}
          </li>

          <li class="button">
            <OrangeButtonLink
              buttonText={this.state.started ? editing ? "Update" : "Add To Cart" : 'Customize Your ' + pageConfig.productType }
              inverse={true}
              extraClassNames={this.state.started ? (cartButtonDisabled ? "disabled" : "") + " " + (addingToCart ? "pending" : "") : ""}
              onClick={this.state.started ? this.addToCart : this.scrollTo}
            />
            <LoadingCircle visible={addingToCart} />
          </li>
        </ul>
      </aside>
    )
  }
}

PriceBar.propTypes = {
    updating: PropTypes.bool,
    started: PropTypes.bool,
    preconfigured: PropTypes.bool,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
    quantity: PropTypes.number,
    steps: PropTypes.array
}

const mapStateToProps = (state) => {
    let local = state.rootReducer.local;
    let remote = state.rootReducer.remote;
    return {
        fullState: state.rootReducer.remote,
        updating: local.updating,
        editing: local.editing,
        started: local.started,
        preconfigured: false,
        price: remote.price,
        totalPrice: parseInt(remote.totalPrice),
        quantity: parseInt(remote.quantity),
        productCode: remote.productCode,
        productName: remote.productName,
        steps: remote.steps,
        productType: null,
        addingToCart: local.addingToCart,
        stepsComplete: remote.stepsComplete
    }
}

const mapDispatchToProps = {
  triggerQuantityChanged,
  triggerAddingToCart,
  placeItemInCart
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceBar);
