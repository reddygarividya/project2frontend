/**
 * 
 */
app.factory('NotificationService',function($http) {
	var notificationService={}
	notificationService.getNotificationsNotViewed=function() {
		 return $http.get("http://localhost:8081/project2backend/getnotifications")
	}
	
	notificationService.getNotification=function(id) {
		return $http.get("http://localhost:8081/project2backend/getnotification/"+id)
	}
	
	notificationService.updateNotification=function(id) {
		return $http.put("http://localhost:8081/project2backend/updatenotification/"+id)
	}
	
	return notificationService;
})