/**
 * 
 */
app.factory('FriendService',function($http) {
	var friendService={}
	friendService.getAllSuggestedUsers=function() {
		return $http.get("http://localhost:8181/project2backend/suggestedusers")
	}
	
	friendService.addFriend=function(toId) {
		return $http.post("http://localhost:8181/project2backend/addfriend",toId)
	}
	
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8181/project2backend/pendingrequests")
	}
	
	friendService.acceptRequest=function(request) {
		return $http.put("http://localhost:8181/project2backend/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request) {
		return $http.put("http://localhost:8181/project2backend/deleterequest",request)
	}
	
	friendService.getAllFriends=function() {
		return $http.get("http://localhost:8181/project2backend/friends")
	}
	return friendService;
})
