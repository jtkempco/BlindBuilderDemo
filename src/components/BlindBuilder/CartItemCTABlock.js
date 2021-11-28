import React, { Component } from "react"
import { icons } from '../../myPackages/commonFunctions.js'
import $ from 'jquery'

class CartItemCTABlock extends Component {
  constructor(props) {
    super(props);
    this.duplicateCartItem  = this.duplicateCartItem.bind(this);
  }

  duplicateCartItem(e) {
    $.post("shoppingcart/duplicateCartItem/" + this.props.rowid, {}, null, "json").then(response => {
      console.log("data: " + JSON.stringify(response));
      window.location.href = pageConfig.baseURL + "cart";
    })
  }
  
  render() {

    return (
        <div><div>
          <a class="CartItemCTA" data-type="duplicate" onClick={this.duplicateCartItem}>
            <span dangerouslySetInnerHTML={{__html: icons.copy}} />
            <span>Copy</span>
          </a>
          <a class="CartItemCTA" data-type="edit" href={this.props.itemEditUrl}>
            <span dangerouslySetInnerHTML={{__html: icons.edit}} />
            <span>Edit</span>
          </a>
          <a class="CartItemCTA" data-type="remove">
            <span dangerouslySetInnerHTML={{__html: icons.remove}} />
            <span>Remove</span>
            <input value="remove" name="form_action" class="CartItemCTA" type="submit" />
          </a>
        </div></div>
      )
  }
}

export default CartItemCTABlock
