var angularStore = angular.module('AngularStore', ['ngRoute','ui.router','main-ctrl','login-ctrl','home-ctrl','user-ctrl']);


angularStore.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
});
angularStore.config(['$stateProvider', function($stateProvider){
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'partials/login.html',
      controller: 'loginController'//,
      //controllerAs: 'homeCtrl'
    })
    .state('home',{
      url: '/home',
      templateUrl: '/angular-hecha-backstage/partials/home.html',
      controller: 'homeController'
    })
    .state('home.main',{
      url: '/main',
      templateUrl: '/angular-hecha-backstage/partials/main.html',
      controller: 'mainController'
    })
    .state('home.user',{
      url: '/user',
      templateUrl: '/angular-hecha-backstage/partials/user.html',
      controller: 'userController'
    })

  // $routeProvider
  //   .when('/main', {
  //     templateUrl: '/partials/main.html',
  //     controller: 'mainController'
  //   })
  //   .when('/cart', {
  //     templateUrl: '/partials/shoppingCart.html',
  //     controller: 'cartController'
  //   })
  //   .when('/product/:productSku', {
  //     templateUrl: '/partials/product.html',
  //     controller: 'storeController'
  //   })
  //   .otherwise({
  //     redirectTo: '/main'
  //   })
}]);
