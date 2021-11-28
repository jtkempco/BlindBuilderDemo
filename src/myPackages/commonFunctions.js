export const toFraction = (n) => {
    var tolerance = Math.pow(10, -6),
        h1 = 1, h2 = 0,
        k1 = 0, k2 = 1,
        b = 1 / n,
        aux, b, a;
    do {
        b = 1 / b;
        a = Math.floor(b);
        aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = b - a;
    } while (Math.abs(n - h1 / k1) > n * tolerance);

    return h1 + "/" + k1;
}

export const filterByObjectProp = ( property, choices ) => {
	let newArray = [];
	for( var i=0; i<choices.length; i++ ) {
		if( newArray.indexOf( choices[i][property] ) === -1 ) {
			newArray.push(choices[i][property]);
		}
	}

	return newArray;
}

export const getRowIdIndex = ( rowid, items ) => {
    for( var i=0; i<items.length; i++ ) 
    {
        if( items[i]['rowid'] === rowid ) {
            return i;
        }
	}

	return false;
}

export const camelCaseToDash = ( str ) => {
	return str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

export const _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
    }
    return target
}

export const ucwords = ( str ) => {
  return (str + '').replace(/^([a-z])|[\s_]+([a-z])/g, function ($1) {
      return $1.toUpperCase();
  })
};


export const isReadyToSubmit = ( fullState ) => {
  if (0 === fullState.steps.length) return !1;
    var roomLabelStep = fullState.steps.slice(-1).pop();
    if (roomLabelStep.disabled || !roomLabelStep.complete) return !1;
    var incompleteSteps = fullState.steps.filter(function(step) {
        return !step.disabled && !step.complete
    });
    try {
        return 0 === incompleteSteps.length
    } catch (err) {
        return !1
    }
}


export const icons = {
  "copy": "<svg enable-background=\"new 0 0 24 24\" id=\"Layer_1\" version=\"1.1\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path fill=\"#e69018\" stroke=\"#e69018\" clipRule=\"evenodd\" d=\"M22.5,14H14v8.5c0,0.276-0.224,0.5-0.5,0.5h-4C9.224,23,9,22.776,9,22.5V14H0.5  C0.224,14,0,13.776,0,13.5v-4C0,9.224,0.224,9,0.5,9H9V0.5C9,0.224,9.224,0,9.5,0h4C13.776,0,14,0.224,14,0.5V9h8.5  C22.776,9,23,9.224,23,9.5v4C23,13.776,22.776,14,22.5,14z\" fill-rule=\"evenodd\"></path></svg>",
  "edit": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 15.469\"><path d=\"M3.275 14.266l-2.553.587-.209-2.611 5.9-8.049 2.761 2.025zM8.978.695l2.761 2.024-1.684 2.231-2.762-2.024zm5.955 5.678\" fill=\"none\"></path></svg>",
  "remove": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 17.301\"><polyline points=\"11.5 5.301 11.5 16.801 0.5 16.801 0.5 5.301\" fill=\"none\"></polyline><line x1=\"4.5\" y1=\"5.301\" x2=\"4.5\" y2=\"14.301\" fill=\"none\"></line><line x1=\"12\" y1=\"3.301\" y2=\"3.301\" fill=\"none\"></line><line x1=\"7.5\" y1=\"5.301\" x2=\"7.5\" y2=\"14.301\" fill=\"none\"></line><rect fill=\"#4c4c4c\" x=\"5.045\" width=\"2\" height=\"2\"></rect></svg>",
  "checkmark": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"78.369\" height=\"78.369\" viewBox=\"0 0 78.369 78.369\"><path fill=\"#4c4c4c\" d=\"M78.049 19.015L29.458 67.606a1.094 1.094 0 0 1-1.548 0L.32 40.015a1.094 1.094 0 0 1 0-1.547l6.704-6.704a1.095 1.095 0 0 1 1.548 0l20.113 20.112 41.113-41.113a1.095 1.095 0 0 1 1.548 0l6.703 6.704a1.094 1.094 0 0 1 0 1.548z\"></path></svg>",
  "arrow": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22.5 12.2\"><polyline fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" points=\"14.3,0.4 21.7,5.8 14.5,11.2 14.5,5.6 0,5.6\"></polyline></svg>"
}


export const productCodes = {
  "premium-wood-blinds": "pw-clrs",
  "classic-wood-blinds": "wb-clrs",
  "faux-wood-blinds": "wf-clrs",
  "basic-aluminum-mini-blinds": "mb-cbhdr",
  "classic-aluminum-mini-blinds": "mb-cchdr",
  "deluxe-aluminum-mini-blinds": "mb-cdhdr",
  "ultra-room-darkening-aluminum-mini-blinds": "mb-cuhdr",
  "vinyl-vertical-blinds": "vb-basicvinyl",
  "fabric-vertical-blinds": "vb-basicfabric"
};
