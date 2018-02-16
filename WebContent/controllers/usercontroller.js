/**
 * 
 */
app.controller('UserController',function($scope,$rootScope,$location,UserService,$cookieStore){
	$scope.registerUser=function(user){ 
		console.log('entering usercontroller registerUser function in frontend' + user)
		UserService.registerUser(user).then(
		function(response){
			alert('Registered Successfully')
			$location.path('/home')
		},function(response){
			$scope.error=response.data
		})
		
	}
	$scope.login=function(user){
		console.log('UserController -> login')
		console.log(user)
		UserService.login(user).then(function(response){
			$rootScope.loggedInUser=response.data
			$cookieStore.put('currentuser',response.data)
			$location.path('/home')
		},function(response){
			console.log('error')
			$scope.error=response.data
			$location.path('/login')
		}
		)
	}
})