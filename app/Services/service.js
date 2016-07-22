
'use strict';

angular.module('myApp.services', [])



.factory('serviceId', ['$http','$q',function($http,$q) {

	this.foobar = "foobar in service";
	console.log(this.foobar);

    this.getContent = function(data){
        var deff = $q.defer();
        var req = {
        method: 'GET',
    url: ' https://x2-server.herokuapp.com/api/contexts',
    top: data.top,
    left:  data.left
    /*Parameter: {top: 'Eva', left:  'write mail to Eva'}*/
};
             $http(req).then(function mySucces(response) {
        deff.resolve(response);
    }, function myError(response) {
        console.log(response.statusText);
    });
return deff;
    };

/*	GET /api/contexts HTTP/1.1
Host: x2-server.herokuapp.com
top: Bob
left: write mail to Eva
Cache-Control: no-cache
Postman-Token: 2963b262-50fd-7bbd-8c27-e488ac72da1f
*/


/*var req = {
                method: 'PUT',
                url: self.baseUrl + 'classes/EventAttendees/' + data.userID,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Parse-Application-Id': baseKey.applicationKey,
                    'X-Parse-REST-API-Key': baseKey.restApiKey,
                    'X-Parse-Session-Token': data.session
                },
                data: data.data,
                cache: false
            };

            $http(req).success(function(objS) {
                if (objS === null) {
                    deff.reject({msg: 'No data found'});
                }
                deff.resolve(objS);
                EventAttendee.putAcceptStatus(data,objS);
            }).error(function(objE) {
                deff.reject({msg:objE});
            });
*/

	
	return this;

}]);