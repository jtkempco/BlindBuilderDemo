const initialState = {local: { lastStepChanged: null, started: pageConfig.started, updating: false, openStep: 0, animating: false, addingToCart: false, editing: pageConfig.editing, preconfigured: false, productType: null }, remote: {steps: [], messages: [], showLoaderWrapper: true, scrollToElement: null }}

const rootReducer = ( state, action ) => {

    switch ( action.type ) {

      case 'HYDRATE':
        return {...state, remote: action.data, local: state.local}
        break

      case 'SET_ERROR_MESSAGES':
        var local = state.local;

        local.messages = state.local.messages;

        return {...state, remote: state.remote, local: local }
        break

      case 'STEP_TOGGLED':
        var remote = state.remote;
        var local = state.local;

        remote.steps.map(step => { step.open = false });
        local.openStep = ( local.openStep === action.data.stepNumber && action.data.open ) ? null : parseInt(action.data.stepNumber);

        if( local.openStep != null ) remote.steps[parseInt(action.data.stepNumber)].open = !action.data.open;

        return {...state, remote: remote, local: local }
        break

      case 'OPEN_NEXT_STEP':
        var remote = state.remote;
        var local = state.local;

        local.openStep = parseInt(action.data.stepNumberToOpen);
        remote.steps[parseInt(action.data.stepNumberToClose)].open = false;
        remote.steps[parseInt(action.data.stepNumberToOpen)].open = true;

        return {...state, remote: remote, local: local }
        break


      case 'TOGGLE_UPDATING':
        var local = state.local;
        var remote = state.remote;

        if( action.data.addingToCart ){
          local.addingToCart = action.data.addingToCart;
        }else{
          if( !action.data.updating ){
            local.updating = action.data.updating;
            local.started = true;
          }else{
            var lastStepChanged = action.data.lastStepChanged;
            remote.steps[action.data.stepNumber].fields[action.data.fieldNumber].selectedValue = lastStepChanged.lastValueChanged;
            remote.lastStepChanged = local.lastStepChanged = lastStepChanged;
            remote.showLoader = local.updating = action.data.updating;
          }
        }
        return {...state, local: local, remote: remote }
        break;

      case 'TOGGLE_ADDING_TO_CART':
        var local = state.local;
        local.addingToCart = !local.addingToCart;

        return {...state, remote: state.remote, local: local }
        break

      case 'STEP_ANIMATING':
        var remote = state.remote;
        var local = state.local;

        local.animating = action.data.animating;

        return {...state, remote: remote, local: local }
        break

      default:
        console.log("");
        return initialState
     }
}

export default rootReducer
