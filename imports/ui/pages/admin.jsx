import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Users } from '../../api/users/users.js';
import User from './user.jsx';
import AccountsUIGoogle from './account';

class Admin extends Component {

  renderUsers() {
    return this.props.users.map((user) => (
      <User key={user._id} user={user} />
    ));
  }

  render() {
    return (
      <div className="container">
        <a href={FlowRouter.path('Home')} className='app-link'>Back to home page</a>
        <AccountsUIGoogle />
        { this.props.adminUser ?
          <div>
            <header>
              <h1>Users List</h1>
            </header>
            <table className="table table-striped">
              <tbody>
              {this.renderUsers()}
              </tbody>
            </table>
          </div> : ''
        }
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('appUsers');

  return {
    users: Users.find({}, { sort: { secondName: 1 } }).fetch(),
    adminUser: Meteor.user(),
  };
})(Admin);