import $ from 'jquery'
import { QueryStringHelper } from '../myPackages/QueryStringHelper.js'
import { _extends } from '../myPackages/commonFunctions.js'
import scrollToElement from 'scroll-to-element'
import { isReadyToSubmit } from '../myPackages/commonFunctions.js'

export const hydrate = data => {
  return { type:'HYDRATE', data }
}

const open_next_step  = data => ({ type: "OPEN_NEXT_STEP", data: data });
const step_toggled    = data => ({ type: "STEP_TOGGLED", data: data });
const step_animating  = data => ({ type: "STEP_ANIMATING", data: data });
const toggle_updating = data => ({ type: "TOGGLE_UPDATING", data: data });
const _hydrate        = data => ({ type: "HYDRATE", data: data });

const setLocalMessages = data => ({ type: "SET_ERROR_MESSAGES", data: data });

const toggleAddingToCart = data => ({ type: "TOGGLE_ADDING_TO_CART", data: data });




export const triggerStepToggled = (stepNumber, open) => (
  (dispatch, getState) => {
    const { local } = getState().rootReducer;
    dispatch(step_toggled({stepNumber: stepNumber, open: open}));
  }
)
/*
export const onToggleStep = (stepNumber, open) => (
  (dispatch, getState) => {
    const { local } = getState().rootReducer;
    dispatch(step_toggled({stepNumber: local.openStep, open: open}));
  }
)
*/

export const onToggleNextStep = (stepNumber, open) => (
  (dispatch, getState) => {
    const { local, remote } = getState().rootReducer;

    var n = remote.steps[local.openStep + 1].disabled ? 2 : 1;
    //dispatch(open_next_step({stepNumberToClose: stepNumber, stepNumberToOpen: local.openStep + n}));
    dispatch(open_next_step({stepNumberToClose: stepNumber, stepNumberToOpen: local.openStep + n}));
  }
)

export const toggleStepAnimating = () => (
  (dispatch, getState) => {
    const { animating } = getState().rootReducer;
    dispatch(step_animating({animating: !animating}));
  }
)

export const setStepAnimating = (animating) => (
  (dispatch, getState) => {
    dispatch(step_animating({animating: animating}));
  }
)

export const triggerOptionChanged = (stepNumber, fieldName, selectedValue) => (
    (dispatch, getState) => {
      var newState = _extends({}, getState().rootReducer);
      var fieldNumber = newState.remote.steps[stepNumber].fields.findIndex(field => field.name === fieldName);
      var lastStepChanged = newState.remote.steps[stepNumber];
      newState.remote.lastStepChanged = newState.local.lastStepChanged = {
        id: lastStepChanged.id,
        lastOptionChanged: fieldName,
        lastValueChanged: selectedValue
      }

      if( fieldName === "RoomLabel" ) {
        newState.remote.steps[stepNumber].complete = selectedValue.length > 0 ? true : false;
        newState.remote.steps[stepNumber].selectedValue = selectedValue.length > 0 ? selectedValue : null;
        newState.remote.steps[stepNumber].fields[fieldNumber].selectedValue = selectedValue.length > 0 ? selectedValue : null;
        newState.remote.stepsComplete = isReadyToSubmit(newState.remote);
        dispatch(_hydrate(newState.remote));
        QueryStringHelper.update(newState.remote);

      }else{

        dispatch(toggle_updating({showLoader: true, updating: true, fieldNumber: fieldNumber, stepNumber: parseInt(stepNumber), lastStepChanged: newState.remote.lastStepChanged}));

        const previousCordSystem  = ( fieldName === 'CordSystem') ? selectedValue : newState.remote.previousCordSystem;
        const url                 = pageConfig.baseURL + "api/GetUpdateState/" + newState.remote.productCode + "?" + QueryStringHelper.stringify();
        const postData            = { lastStepChanged: newState.remote.lastStepChanged, previousCordSystem: previousCordSystem };

        $.post(url, postData, null, "json").then(response => {
            response.lastStepChanged = newState.remote.lastStepChanged;
            dispatch(_hydrate(response));
            if( response.messages.length > 0 ) {
                dispatch(setLocalMessages(response.messages));
            }
            dispatch(toggle_updating({updating: false}));
            QueryStringHelper.update(response);
        })
      }
    }
)

export const triggerQuantityChanged = (quantity, method) => (
  (dispatch, getState) => {
    var newState = _extends({}, getState().rootReducer);
    if( method === "up" ) {
      newState.remote.quantity = newState.remote.quantity + 1;
    }else{
      newState.remote.quantity = newState.remote.quantity - 1;
    }
    dispatch(_hydrate(newState.remote));
  }
)


export const placeItemInCart = (fullState, started, editing) => (
  (dispatch, getState) => {
    //var newState = _extends({}, getState().rootReducer);
    //const url = "http://localhost/blindmunkey/api/addToCart/" + fullState.productCode + "?" + QueryStringHelper.stringify();
    const url = pageConfig.baseURL + "api/addToCart/" + fullState.productCode + "?" + QueryStringHelper.stringify();
    //console.log(JSON.stringify(fullState));

    dispatch(toggleAddingToCart());

    var buttonText = started ? editing ? "Update" : "Add To Cart" : 'Customize Your ' + pageConfig.productType;

    var postData = buttonText === "Update" ? { quantity: fullState.quantity, guid: pageConfig.guid, editing: pageConfig.editing } : { quantity: fullState.quantity };


    $.post(url, postData, null, "json").then(response => {

        setTimeout(() => {
          dispatch(toggleAddingToCart());
          console.log("CartItems: " + JSON.stringify(response));
          window.location.href = pageConfig.baseURL + "/cart";

        }, 2000);

    })
  }
)
