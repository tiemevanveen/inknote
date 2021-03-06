angular.module('keypress', []).
	directive('ngEnter', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(keypressFuncsOn){
					if(event.which === 13) {
						scope.$apply(function (){
							scope.$eval(attrs.ngEnter);
						});
						event.preventDefault();
					}
				}
		        });
		};
	}).
	directive('ngTab', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(keypressFuncsOn){
					if(event.which === 9) {
						scope.$apply(function (){
							scope.$eval(attrs.ngTab);
						});
						event.preventDefault();
					}
				}   
			});
		};
	}).
	directive('ngUpdown', ['$parse', function ($parse) {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(keypressFuncsOn){
					if(event.which === 38 || event.which === 40) {
						scope.$apply(function (){
							var expr = $parse(attrs['ngUpdown']);
							expr(scope, {
					                  $event: event
					                });
						});
						event.preventDefault();
					}
				}
		        });
		};
	}]).
	directive('ngLeftright', ['$parse', function ($parse) {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(keypressFuncsOn){
					if(event.which === 37 || event.which === 39) {
						scope.$apply(function (){
							var expr = $parse(attrs['ngLeftright']);
							expr(scope, {
					                  $event: event
					                });
						});
						event.preventDefault();
					}
				}
			});
		};
	}]).
	directive('ngKeyboard', ['$parse', function ($parse) {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(keypressFuncsOn){
					scope.$apply(function (){
						var expr = $parse(attrs['ngKeyboard']);
						expr(scope, {
							$event: event
						});
					});
				}
			});
		};
	}]);
