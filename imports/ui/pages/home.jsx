import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const Home = () => {
  return (
    <div className="container">
    <header>
      <h1>Welcome to our app.</h1>
      <a href={FlowRouter.path('Admin')} className="admin-link pull-right">To administrator page</a>
    </header>
      <a href={FlowRouter.path('Registration')} className='app-link'>Sign in</a>
  </div>
  )
};

export default Home