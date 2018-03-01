/**
 * 
 */
app.controller('BlogPostController',function($scope,$location,$rootScope,BlogService) {
	$scope.addBlog=function(blog) {
		BlogService.addBlog(blog).then(
				function(response) {
					alert('Blogpost is added successfully and it is waiting for approval');
				},
				function(response) {
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
})