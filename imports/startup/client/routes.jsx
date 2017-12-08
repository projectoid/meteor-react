import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Layout from '../../ui/layouts/layout.js';
import Home from '../../ui/pages/home.jsx';
import Admin from '../../ui/pages/admin.jsx';
import Registration from '../../ui/pages/registration.jsx';

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( Layout, {
      content: <Home />
    })
  }
});

FlowRouter.route('/admin', {
  name: 'Admin',
  action(){
    mount( Layout, {
      content: <Admin />
    })
  }
});

FlowRouter.route('/registration', {
  name: 'Registration',
  action(){
    mount( Layout, {
      content: <Registration />
    })
  }
});

FlowRouter.notFound = {
  action: function() {
    FlowRouter.go('/');
  }
};