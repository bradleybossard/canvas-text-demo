document.addEventListener("DOMContentLoaded", function(event) { 

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	WebFontConfig = {
		google: {
			//families: ['Droid Sans', 'Droid Serif']
			//families: ['Droid Sans']
			families: ['Yatra One']
		},

		loading: function() {},
		active: function() {},
		inactive: function() {},
		fontloading: function(familyName, fvd) {},
		fontactive: function(familyName, fvd) {
			//ctx.font = '50px "Droid Sans"';
			ctx.font = '50px "Yatra One"';
			ctx.textBaseline = 'top';
			ctx.fillText('Hello!', 20, 10);
			ctx.strokeStyle = "sienna"; // line color
			ctx.strokeText("Hello world", 20, 10);
		},
		fontinactive: function(familyName, fvd) {}
	};

	(function(d) {
		var wf = d.createElement('script'), s = d.scripts[0];
		wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
		s.parentNode.insertBefore(wf, s);
	})(document);

});
