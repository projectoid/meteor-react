
import {Accounts} from "meteor/accounts-base";
import {Meteor} from "meteor/meteor";

Meteor.startup(function () {
  createUsers()
});

Accounts.config({
  forbidClientAccountCreation : true
});

function createUsers () {
  let users;

  if (Meteor.users.find().fetch().length === 0) {

    users = [
      {name:"Admin",email:"mtest9767@gmail.com",roles:['admin']},
    ];

    users.forEach(function (userData) {
      let id;

      if (Meteor.isServer) {
        id = Accounts.createUser({
          email: userData.email,
          password: "test1test",
          profile: { name: userData.name }
        });
      }

      // email verification
      Meteor.users.update({_id: id},
        {$set:{'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);

    });
  }
}