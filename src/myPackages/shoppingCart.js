import { ucwords } from '../../myPackages/commonFunction.js'
import fullState from '../../json/fullState.js'


const getJsonFromUrl = () => {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}



const createCartId = () => {
  var  length = 13;
  var  timestamp = +new Date;
  return timestamp.toString();
}

//TO_DO!!!!!!!! function cartItemGenerator

const CreateCart = () => {

  const cartId = createCartId();

  var CART = {"expiration":cartId,"value":{"items":[],"orderSubtotal":0}};

  if (typeof(Storage) !== "undefined" && localStorage.getItem("SHOPPING_CART") === null) {
      localStorage.setItem("SHOPPING_CART", JSON.stringify(CART))
  }else{
      console.log("LocalStorage not enabled. try cookies.");
  }
}




const createCartItem = ( fullState ) => {
  var item = {};
  item.configImages = fullState.displayImages;
  item.height = 0;
  item.itemGuid = null;
  item.name = fullState.displayName;
  item.options = [];
  additionalCosts = 0;

  fullState.steps.foreach(step => {
    step.fields.foreach(field => {
      field.choices.foreach(choice => {
        if( field.name.includes('Width') === false && !field.name.includes('Height') === false ) {
          if( choice.value === field.selectedValue && field.name != "CordSystem" && field.name != "AddTape" ) {
              var option = {};
              option.optionTypeConstant = ucwords(field.name);
              option.price 	= choice.additionalCostRaw;
              option.sku 		= choice.value;
              option.name 	= choice.displayName;

              item.options.push(option)

              additionalCosts += parseFloat(choice.additionalCostRaw)
          }
        }
      })
    })
  })
  item.productCode = fullState.productCode;
  item.quantity = 1;
  item.room = NULL;
  item.unitBasePrice = fullState.price;
  item.unitFullPrice = fullState.price + additionalCosts;
  item.width = 0;
  item.oversize = false;
  item.title = fullState.displayName;
  item.subtotal = item.unitFullPrice;
}
