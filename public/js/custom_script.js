var path = window.location.origin+"/";
var my_app = angular.module('shopping_cart_app', ['ngCookies']);

app.service('getData',function($http){
	this.get = function(route,callback){
		$http.get(path+route).then(function(result){
			callback(result.data);
		},
		function(error){
			console.log(error);
		});
	};
});

app.service('postData',function($http){
	this.post = function(route,formData,callback){
		$http.post(path+route,formData).then(function(result){
			callback(result.data);
		},
		function(error){
			console.log(error);
		});
	};
});

app.controller('loginController',function($scope,postData,$window){
	$scope.login = function(){
		// console.log($scope.form);
		if(!$scope.login)
		{
			$scope.err = "Please Enetr All the fields";
		}
		else
		{
			postData.post('loginAction',$scope.login,function(result){
				if(result == 'ok')
				{
					$window.location.href = path;
				}
				else
				{
					$scope.loginErr = result;
				}
			});
		}
	}
});
