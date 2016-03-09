angular.module('app')
  .config(settings)
  .controller('SessionCtrl', SessionCtrl)

settings.$inject = ['$stateProvider', '$urlRouterProvider', 'ServerAPIProvider', '$injector']

function settings($stateProvider, $urlRouterProvider, ServerAPIProvider, $injector) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      template: "<button ng-click='Session.increment()'>Click Me</button>\
      <p>You've pressed the button {{Session.counter}} times.</p>",
      //templateUrl: UiRouter.template('/home.html'),
      controller: "SessionCtrl as Session"
    })
}

SessionCtrl.$inject = ['$scope'];

function SessionCtrl($scope) {
  let Session = this;

  Session.setDefault = setDefault;
  Session.increment = increment;

  function setDefault(val) {
    Session.counter = val;
  }

  function increment() {
    Session.counter++;
  }

  Session.setDefault(0);
}
