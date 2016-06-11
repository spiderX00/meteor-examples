import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  Meteor.methods({
    getContents: function(){
      var collection = new Mongo.Collection('wiki').find().fetch()
      console.log(collection);
      return collection;
    }
  })
});
