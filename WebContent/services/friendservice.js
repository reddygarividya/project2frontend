/**
 * 
 */
app.factory('FriendService',function($http) {
	var friendService={}
	friendService.getAllSuggestedUsers=function() {
		return $http.get("http://localhost:8181/project2backend/suggestedusers")
	}
	return friendService;
})
