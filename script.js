
var app = angular.module('myApp', [])
.controller('myCtrl', function($scope, $http) {

  $scope.xTextPos = 0;
  $scope.yTextPos = 0;
  $scope.mouseDownX = -1;
  $scope.mouseDownY = -1;
  $scope.strokeColor = '#ff0000';
  $scope.fillColor = '#00ff00';
  $scope.textContent = 'Hello World';

	var canvasContainer = document.getElementById('canvas-container');

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var img = new Image();

  $scope.redraw = function() {
		ctx.fillStyle = "rgba(0, 0, 0, 0.0)";
		ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImage();
    drawText();
	}

  $scope.mouseDown = function($event) {
    console.log('down');
    $scope.mouseDownX = $event.offsetX;
    $scope.mouseDownY = $event.offsetY;
  }

  $scope.mouseUp = function($event) {
    console.log('up');
    $scope.mouseDownX = -1;
    $scope.mouseDownY = -1;
  }

  $scope.mouseMove = function($event) {
    //console.log($event);
    if ($scope.mouseDownX != -1 && $scope.mouseDownY != -1) {
      console.log($scope.mouseDownX, $scope.mouseDownY);
    }
  }

  function drawText() {
		//textCtx.font = '50px "Droid Sans"';
		ctx.font = '50px "Yatra One"';
		ctx.textBaseline = 'top';
		ctx.fillStyle = $scope.fillColor; // line color
		ctx.fillText($scope.textContent, $scope.xTextPos, $scope.yTextPos);
		ctx.strokeStyle = $scope.strokeColor; // line color
		ctx.strokeText($scope.textContent, $scope.xTextPos, $scope.yTextPos);
  }

  function drawImage() {
    //draw background image
    var newWidth = img.width / 2;
    var newHeight = img.height / 2;
    console.log(img.height, newHeight);
    canvasContainer.style.width = newWidth + 'px';
    canvasContainer.style.height= newHeight + 'px';
    canvas.width = newWidth;
    canvas.height= newHeight;
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    //draw a transparent box over the top
    //ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
    //ctx.fillRect(0, 0, 500, 500);
	}

	//drawing of the test image - img1
	img.onload = function () {
    drawImage();
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
			drawText();
		},
		fontinactive: function(familyName, fvd) {}
	};


	(function(d) {
		var wf = d.createElement('script'), s = d.scripts[0];
		wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
		s.parentNode.insertBefore(wf, s);
	})(document);

});
