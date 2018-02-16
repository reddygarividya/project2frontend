/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
	
	console.log('in userservice'+user)	
	console.log(user)
	return	$http.post("http://localhost:8081/project2backend/registeruser",user)
	}
	userService.login=function(user){
		console.log('userservice-> login')
		console.log(user)
		return $http.post("http://localhost:8081/project2backend/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8081/project2backend/logout")
	}
	return userService;
})