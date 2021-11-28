export const queryparams = {
    title: null,
    url: window.location.href.split('?')[0],
	stringify: function( obj ) {
		var str = "";
		Object.keys(obj).forEach(function(key) {
			var k = encodeURI(key);
			var v = encodeURI(obj[k]);
			str += ( v == null || v === 'null' ) ? k + "&" : k + "=" + v + "&";
		});
        return str.slice(0, -1) 	
	},
	getState: function( data ){
		var state = {};
		data.steps.forEach(function(step) {
			step.fields.forEach(function(field) {
				state[field.name] = ( field.defaultValue != null && field.selectedValue == null ) ? field.defaultValue : field.selectedValue;   
			})
        })
		return state;
	},
	updateHistory: function( state ) {
        window.history.pushState(state, this.title, this.url + "?" + this.stringify(state));
    },
	setState: function( data ){
		var state = this.getState( data );
		this.updateHistory( state );
	}
}