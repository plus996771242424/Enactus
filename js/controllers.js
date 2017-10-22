angular.module('app.controllers', [])
  
.controller('page2Ctrl', ['$scope', '$stateParams','$ionicLoading', '$compile', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $compile) {
          alert('ss');
          navigator.geolocation.getCurrentPosition(function(pos) {
              
 $scope.lat = pos.coords.latitude;
 $scope.long = pos.coords.longitude; 
              
       alert(pos.coords.latitude + ' - '+ pos.coords.longitude);
        }, function(error) { 
        });  
       alert($scope.lat + ' - '+ $scope.long);
var map;
document.addEventListener("deviceready", function() {
  var div = document.getElementById("map");

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}, false);

function onMapReady() {
  var button = document.getElementById("button");
  button.addEventListener("click", onButtonClick);
}

function onButtonClick() {

  // Move to the position with animation
  map.animateCamera({
    target: {lat: $scope.lat, lng: $scope.long},
    zoom: 17,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }, function() {

    // Add a maker
    map.addMarker({
      position: {lat: $scope.lat, lng: $scope.long},
      title: "Вы здесь",
      snippet: "This plugin is awesome!",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {

      // Show the info window
      marker.showInfoWindow();

      // Catch the click event
      marker.on(plugin.google.maps.event.INFO_CLICK, function() {

        // To do something...
        alert("Hello world!");

      });
    });
  });
}
      
}])
  
.controller('page3Ctrl', ['$scope', '$stateParams','$ionicLoading', '$compile', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading, $compile) {
          alert('ss');
          navigator.geolocation.getCurrentPosition(function(pos) {
              
 $scope.lat = pos.coords.latitude;
 $scope.long = pos.coords.longitude; 
              
       alert(pos.coords.latitude + ' - '+ pos.coords.longitude);
        }, function(error) { 
        });  
       alert($scope.lat + ' - '+ $scope.long);
var map;
document.addEventListener("deviceready", function() {
  var div = document.getElementById("map");

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}, false);

function onMapReady() {
  var button = document.getElementById("button");
  button.addEventListener("click", onButtonClick);
}

function onButtonClick() {

  // Move to the position with animation
  map.animateCamera({
    target: {lat: $scope.lat, lng: $scope.long},
    zoom: 17,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }, function() {

    // Add a maker
    map.addMarker({
      position: {lat: $scope.lat, lng: $scope.long},
      title: "Вы здесь",
      snippet: "This plugin is awesome!",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {

      // Show the info window
      marker.showInfoWindow();

      // Catch the click event
      marker.on(plugin.google.maps.event.INFO_CLICK, function() {

        // To do something...
        alert("Hello world!");

      });
    });
  });
}
      
}])
   
.controller('page4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('historyLocationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('keyLocationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('restrictedZonesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mAPCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams','$http',   '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http,  $location) {
 
  $scope.user = {}
$scope.auth = function(){
        $http.post('http://dastanbek.ru/api/auth.php', $scope.user).success(function(response) { 
          if(response.alert){
          alert(response.alert);
          }
            
          if(response.error === 0 ){  
            if(response.data.type === 'roditel'){  
            localStorage.setItem('email',response.data.email);
            $location.path('/page1/page2');
            } else {
            localStorage.setItem('email',response.data.email);
            $location.path('/mAP');
            }
          }
      }).error(function(response) {  alert('Отсутствует интернет-соединение'); });
}

}])
   
.controller('signupCtrl', ['$scope', '$stateParams','$http',   '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http,  $location) {
  $scope.user = {}
$scope.signup = function(){
        $http.post('http://dastanbek.ru/api/signup.php', $scope.user).success(function(response) { 
          alert(response.alert);
          if(response.error === 0 ){  
            localStorage.setItem('email',response.email);
            $location.path('/page1/page2');
          }
      }).error(function(response) {  alert('Отсутствует интернет-соединение'); });
}

}])
   
.controller('aboutUsCtrl',  ['$scope', '$stateParams','$http',   '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http,  $location) {
 
$scope.auth = function(){
        $http.post('http://dastanbek.ru/api/auth.php', $scope.user).success(function(response) { 
          if(response.alert){
          alert(response.alert);
          }
            
          if(response.error === 0 ){  
            if(response.user.type === 'roditel'){  
            localStorage.setItem('email',response.email);
            $location.path('/page1/page2');
            } else {
            localStorage.setItem('email',response.email);
            $location.path('/mAP');
            }
          }
      }).error(function(response) {  alert('Отсутствует интернет-соединение'); });
}

}])
   
.controller('kLocCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 