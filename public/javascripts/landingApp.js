(function(){angular.module("landingApp",["ngRoute"]).controller("MainCtrl",function(){}).controller("newsletterCtrl",["$scope","$http",function(e,t){e.newsletter={email:"me@example.com",confirmed:!1},e.close=function(){e.newsletter.confirmed=!1},e.save=function(n){t.post("/newsletter",n).success(function(t){"OK"===t&&(e.newsletter.confirmed=!0)})}}]).controller("tabCtrl",["$scope",function(e){return e.currentTab=0,e.updateTab=function(t){e.currentTab=t},e.isActiveTab=function(t){return e.currentTab===t?!0:!1}}]).config(["$routeProvider","$locationProvider",function(e,t){e.when("",{redirectTo:"/home",controller:"newsletterCtrl"}).when("/home",{templateUrl:"templates/home.html"}).when("/",{redirectTo:"/home"}).otherwise({redirectTo:"/home"})}])}).call(this);