import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {check} from "meteor/check";

import Schemas from './users-schema'

export const Users = new Mongo.Collection('appUsers');

if (Meteor.isServer) {
  Meteor.publish('appUsers', function tasksPublication() {
    return Users.find();
  });
}

Meteor.methods({
  'users.insert'(user) {
    check(user, Object);
    Users.insert(user, function(error, result) {
      if (error) {
        Session.set('errorMessage', error.message);
        Session.set('errorKeys', error.invalidKeys);
      }
    });
  },
  'users.remove'(userId) {
    check(userId, String);
    Users.remove(userId);
  },
  'users.showInfo'(userId) {
    check(userId, String);
    if(Meteor.isClient) {
      Modal.show('userInfo', function () {
        return Users.findOne(userId);
      });
    }
  },
});

Users.attachSchema(Schemas.Users, {transform: true});