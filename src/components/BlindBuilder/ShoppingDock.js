import React, { Component } from "react"
import OrangeButtonLink from './OrangeButtonLink2'
import LoadingCircle from './LoadingCircle'
import PropTypes from 'prop-types'
import CurrencyFormat from 'react-currency-format'


class ShoppingDock extends Component {
  render() {
    //const cartButtonDisabled = !this.isReadyToSubmit();
    //const { updating, editing, addingToCart, triggerQuantityChanged } = this.props;
    //var options = { buttonText: "Proceed to Checkout", inverse: false, extraClassNames:"inverse" href: "http://localhost/joeykemp/cart/checkout" };

    return (
      <div class="ShoppingCartDock">
        <div class="ShoppingCartDock__left">
          <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.034 28.477"><line x1="15.325" y1="5.4" x2="5.56" y2="5.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"></line><line x1="15.325" y1="8.251" x2="9.017" y2="8.251" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"></line><line x1=".535" y1="11.102" x2="15.325" y2="11.102" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"></line><path d="M36.532 11.084s8.839 0 8.411 4.7h-8.361z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"></path><circle cx="39.112" cy="25.412" r="2.53" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"></circle><circle cx="20.137" cy="25.412" r="2.53" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"></circle><path d="M15.362 24.913v-.036a4.74 4.74 0 0 1 9.48 0v.036h9.482v-.036a4.74 4.74 0 0 1 9.48 0v.036h4.7V16.43s-.064-4.491-3.271-6.558a15.7 15.7 0 0 0-8.554-2.26V.535H15.361v10.549" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"></path></svg>'}} />
          <div>Order Today and<a href="#/shipping">We’ll Ship Tomorrow</a></div>
        </div>
        <div class="ShoppingCartDock__right">
          <p>Order Subtotal: <span><CurrencyFormat value={this.props.total.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></p>
          <div class="ShoppingCartDock__right__checkout-button--desktop">
            <OrangeButtonLink buttonText="Proceed to Checkout" inverse={false} extraClassNames="inverse" href={pageConfig.baseURL + "cart/checkout"} />
          </div>
          <div class="ShoppingCartDock__right__checkout-button--mobile">
            <OrangeButtonLink buttonText="Proceed to Checkout" inverse={false} extraClassNames="inverse" />
          </div>
        </div>
      </div>
    )
  }
}

ShoppingDock.propTypes = {
    total: PropTypes.number,
    disabled: PropTypes.bool
}

export default ShoppingDock
