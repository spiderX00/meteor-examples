if (Meteor.isClient) {

  angular.module('app', ['ui.router'])
  .config(settings)
  .run(app)
  .controller('SessionCtrl', SessionCtrl)

  settings.$inject = ['$stateProvider', '$urlRouterProvider']

  function settings($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home',{
      url: "/home",
      templateUrl: '/home.html',
      controller: "SessionCtrl as Session"
    })
  }

  app.$inject = ['$rootScope'];

  function app($rootScope){

  }

  SessionCtrl.$inject = ['$scope'];

  function SessionCtrl($scope){
    let Session = this;
    Session.setDefault = function(val){
       Session.counter = val;
    }
    Session.increment = function(){
      Session.counter++;
    }
    Session.setDefault(0);
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    let _ = lodash;
    let obj = {a:'1', b:'2', c:'3'};
    _.forEach(obj, function(el){
      console.log(el);
    })
  });
}
