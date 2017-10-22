angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.page2', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page3', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.settings', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('historyLocations', {
    url: '/page7',
    templateUrl: 'templates/historyLocations.html',
    controller: 'historyLocationsCtrl'
  })

  .state('keyLocations', {
    url: '/page8',
    templateUrl: 'templates/keyLocations.html',
    controller: 'keyLocationsCtrl'
  })

  .state('restrictedZones', {
    url: '/page9',
    templateUrl: 'templates/restrictedZones.html',
    controller: 'restrictedZonesCtrl'
  })

  .state('tabsController.mAP', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/mAP.html',
        controller: 'mAPCtrl'
      }
    }
  })

  .state('login', {
    url: '/page11',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page12',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.aboutUs', {
    url: '/page13',
    views: {
      'tab4': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('kLoc', {
    url: '/page17',
    templateUrl: 'templates/kLoc.html',
    controller: 'kLocCtrl'
  })

$urlRouterProvider.otherwise('/page17')


});