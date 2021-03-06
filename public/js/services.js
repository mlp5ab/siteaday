/* Services */

/**
*   The module API registers a custom service using a factory function.
*   It depends on ngResource which help makes cleaner RESTful clients
*/
angular.module('articleServices', ['ngResource']).
    factory('Article', function($resource){
        return $resource('articles/:articleId', {articleId: '@_id'}, {
            query: {method:'GET', isArray:true},
            update: {method:'PUT'},
            remove: {method:'DELETE'}
    });
});

/**
*   Music Services
*/
angular.module('musicServices', ['ngResource']).
    factory('Song', function($resource){
        return $resource('music/:songId', {songId: '@_id'}, {
            query: {method:'GET', isArray:true},
            update: {method:'PUT'},
            remove: {method: 'DELETE'}
    });
});

/**
*   Sketch Services
*/
angular.module('sketchServices', ['ngResource']).
    factory('Sketch', function($resource){
        return $resource('sketches/:sketchId', {sketchId: '@_id'}, {
            query: {method:'GET', isArray:true},
            update: {method:'PUT'},
            remove: {method: 'DELETE'}
    });
});


angular.module('authServices', ['ngResource']).
	factory('User', function($resource){
		return $resource('me', {
			query: {method:'GET'}
	});
});