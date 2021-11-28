import { QueryStringHelper } from './myPackages/QueryStringHelper.js'
const debug = false

export const initialHydrateFetch = (dispatch, productCode, baseURL) => {
  //let slug        = window.location.pathname.split("/").slice(-1)[0];
  let queryParams = window.location.href.indexOf('?') > -1 ? '?' + window.location.href.split('?')[1] : '';
  //let url       = "http://localhost/blindmunkey/api/GetUpdateState/" + productCode + queryParams;
  let url         = baseURL + "api/GetUpdateState/" + productCode + queryParams;

  fetch(url)
  .then((data) => data.json())
  .then(function(data) {
      if( debug ) console.log('SUCCESS:\n' + JSON.stringify(data));
      dispatch({"type":"HYDRATE", "data": data});
      QueryStringHelper.update(data);
  })
  .catch(function(error) {
      // This is where you run code if the server returns any errors
      if( debug ) console.log('CATCH ERRORS ' + error);
  });
}
