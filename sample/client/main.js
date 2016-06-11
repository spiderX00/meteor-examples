import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

Template.content.helpers({
  wikiCollection() {
    Meteor.call('getContents', function(error, response){
      if(response){
        console.log(response);
      }
    });
    return [1,2,3,4,5];
    //return collection;
  },
});
