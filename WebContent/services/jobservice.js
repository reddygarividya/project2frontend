/**
 * 
 */
app.factory('JobService',function($http) {
	var jobService={}
 
	jobService.addJob=function(job) {
		return $http.post("http://localhost:8081/project2backend/addjob",job)
	}
	
	jobService.getAllJobs=function() {
		return $http.get("http://localhost:8081/project2backend/alljobs")
	}
				return jobService;

})