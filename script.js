
var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {

  $scope.xPos = 0;
  $scope.yPos = 0;
  $scope.strokeColor = '#ff0000';

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

  $scope.drawText = function() {
		//ctx.font = '50px "Droid Sans"';
		ctx.font = '50px "Yatra One"';
		ctx.textBaseline = 'top';
		ctx.fillText('Hello!', $scope.xPos, $scope.yPos);
		console.log($scope.xPos);
		ctx.strokeStyle = $scope.strokeColor; // line color
		ctx.strokeText("Hello world", $scope.xPos, $scope.yPos);
  }

	var img = new Image();

	//drawing of the test image - img1
	img.onload = function () {
			//draw background image
			var newWidth = img.width / 2;
			var newHeight = img.height / 2;
      canvas.width = newWidth;
      canvas.height= newHeight;
			ctx.drawImage(img, 0, 0, newWidth, newHeight);
			//draw a transparent box over the top
			//ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
			//ctx.fillRect(0, 0, 500, 500);
	};

	var imageUrl = 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg';
	img.src = imageUrl;

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
			$scope.drawText();
		},
		fontinactive: function(familyName, fvd) {}
	};


	(function(d) {
		var wf = d.createElement('script'), s = d.scripts[0];
		wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
		s.parentNode.insertBefore(wf, s);
	})(document);

});
