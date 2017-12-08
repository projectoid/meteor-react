import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';
import '../templates/userInfoModal';

export default class User extends Component {

  deleteThisUser() {
    Meteor.call('users.remove', this.props.user._id);
  }

  showUserInfo() {
    Meteor.call('users.showInfo', this.props.user._id);
  }

  render() {
    return (
      <tr>
        <td onClick={this.showUserInfo.bind(this)}>
         <span className="text">
          <b>{this.props.user.secondName} {this.props.user.firstName}</b>
        </span>
        </td>
        <td>
          <button className="delete" onClick={this.deleteThisUser.bind(this)}>
            &times;
          </button>
        </td>
      </tr>
    );
  }
}