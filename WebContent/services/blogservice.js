/**
 * 
 */
app.factory('BlogService',function($http) {
	var blogService={}

blogService.addBlog=function(blog) {
		return $http.post("http://localhost:8081/project2backend/addblogpost",blog);
	}
	
	return blogService;
})
