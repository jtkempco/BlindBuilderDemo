export const QueryStringHelper = {
    title: null,
    url: window.location.href.split('?')[0],
	stringify: function( obj = history.state ) {
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
	setParam: function( key, value ) {
        var state = history.state;
        state[encodeURI(key)] = value;
        window.history.pushState(state, this.title, this.url + "?" + this.stringify(state));
    },
	update: function( data ){
		var state = this.getState( data );
		window.history.pushState(state, this.title, this.url + "?" + this.stringify(state));
	}
}