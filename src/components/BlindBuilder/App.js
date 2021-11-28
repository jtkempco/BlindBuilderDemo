import React, { Component } from "react";
import { Provider } from "react-redux";
import BlindBuilderWrapper from "./BlindBuilderWrapper";
import configureStore from "../../configureStore";
import { initialHydrateFetch } from "../../json/initialHydrateFetch";
const store = configureStore();

class App extends Component {
  componentDidMount() {
    store.dispatch((dispatch) => {
      var data = initialHydrateFetch;
      dispatch({ type: "HYDRATE", data: data });
      //QueryStringHelper.update(data);
      //initialHydrateFetch(dispatch, this.props.productCode, this.props.baseURL);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <BlindBuilderWrapper {...this.props} />
      </Provider>
    );
  }
}

export default App;
