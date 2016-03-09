if (Meteor.isClient) {

  angular.module('app', [])
  .config(settings)
  .run(app)
  .controller('SessionCtrl', SessionCtrl)

  settings.$inject = []

  function settings(){
    //console.log('settings');
  }

  app.$inject = ['$rootScope'];

  function app($rootScope){
    //console.log('running!');
  }

  SessionCtrl.$inject = ['$scope'];

  function SessionCtrl($scope){
    Session = this;
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
