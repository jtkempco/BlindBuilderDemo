import React from "react"

const Unknown = (props) => {
  return (
    <div class="ShoppingList__product-item--oversize">
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.5 109.5"><circle fill="none" stroke="#000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="54.7" cy="54.7" r="51.7"></circle><path fill="none" stroke="#000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M62.7 82.9c0 4.4-3.6 8-7.9 8-4.4 0-8-3.6-8-8 0-4.3 3.6-7.9 8.1-7.9 4.2 0 7.8 3.6 7.8 7.9z"></path><path fill="#4c4c4c" d="M55 18.1c4.1 0 7.5 3.7 7.5 8.5 0 2.4 0 2.4-3.3 17-2.2 9.9-3.1 15.7-3.1 19.5v1.1H53c-.1-6.5-1-12.2-4.6-29.2-.7-3.4-1.1-6.6-1.1-8.7 0-4.7 3.2-8.2 7.7-8.2m0-6c-7.8 0-13.7 6.1-13.7 14.2 0 2.6.4 6.2 1.2 9.9 3.5 16.5 4.4 22 4.5 28.1 0 3.3 2.7 5.9 6 5.9h3.2c3.3 0 6-2.7 6-6v-1.1c0-3.4.9-9.1 2.9-18.2 3.4-15.2 3.4-15.2 3.4-18.3 0-8-6.1-14.5-13.5-14.5z"></path></svg>'}} />
      <p><strong>Oversize</strong>&nbsp;Items with a width of 94" or more will have a shipping charge of $70 or 20% of each item's price, whichever is greater. (Vertical blinds with a width or height 94" or more)</p>
    </div>
/*
      <section class="ChildSafetyWarning">
        <div class="ChildSafetyWarning__left">
          <h2>Warning</h2>
            <p><strong>Please read this if you're purchasing a corded product.</strong>*The cords on this product present a potential strangulation hazard.For child safety, consider cordless alternatives or products with inaccessible cords.</p>
          </div>
          <div class="ChildSafetyWarning__right"><img src="/img/logo.ansi.cord.png"><img src="/img/logo.ansi.strangulation.png"></div>
      </section>
    </div>
*/
  )
}
export default Unknown
