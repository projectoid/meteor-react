import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import InputMask from 'react-input-mask';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
      comments: '',
      errorMessage: '',
      errorInput: '',
    };
    this.baseState = this.state;
  }

  handleInputChange = (event) => {
    const target = event.target;

    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = this.state;
    user.createdAt = new Date();

    Meteor.call('users.insert', user);

    const errorKeys = Session.get('errorKeys');

    if (errorKeys.length === 0) {
      this.resetForm();
    } else {
      const names = Object.keys(this.state);
      if (names.indexOf(errorKeys[0].name) > -1) {
        this.setState({
          errorInput: errorKeys[0].name,
        });
      }
      this.setState({
        errorMessage: Session.get('errorMessage')
      });

      Session.set('errorMessage', '');
      Session.set('errorKeys', []);
    }

  };

  resetForm = () => {
    this.setState(this.baseState)
  };

  render() {

    setClass = (input) => {
      return classnames('form-control', {
        errorClass: this.state.errorInput === input
      });
    };

    const firstInput = setClass('firstName');
    const secondInput = setClass('secondName');
    const emailInput = setClass('email');
    const phoneInput = setClass('phone');
    const addressInput = setClass('address');
    const cityInput = setClass('city');
    const provinceInput = setClass('province');
    const postalCodeInput = setClass('postalCode');
    const countryInput = setClass('country');
    const commentsInput = setClass('comments');

    return (
    <div className="container">
      <a href={FlowRouter.path('Home')} className='app-link'>Back to home page</a>
      <header>
        <h1>Please fill in the form below</h1>
        <p>All fields are required</p>
      </header>
      <form className='form-group' onSubmit={this.handleSubmit}>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'firstName' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>First name</b></span>}
          <input className={firstInput} name='firstName'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.firstName} placeholder='John'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'secondName' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Second name</b></span>}
          <input className={secondInput} name='secondName'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.secondName}  placeholder='Smith'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'email' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Email</b></span>}
          <input className={emailInput} name='email'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.email} placeholder='smith@gmail.com'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'phone' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Phone</b></span>}
          <InputMask className={phoneInput} name='phone'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.phone} placeholder='+1 613-123-4567' mask="+1 999-999-9999"/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'address' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Address</b></span>}
          <input className={addressInput} name='address'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.address} placeholder='15 Main street'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'city' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>City</b></span>}
          <input className={cityInput} name='city'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.city} placeholder='Morden'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'province' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Province</b></span>}
          <input className={provinceInput} name='province'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.province} placeholder='Manitoba'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'postalCode' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Postal code</b></span>}
          <input className={postalCodeInput} name='postalCode'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.postalCode} placeholder='R6M 0A7'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'country' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Country</b></span>}
          <input className={countryInput} name='country'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.country} placeholder='Canada'/>
        </div>
        <div className='col-xs-6'>
          { this.state.errorMessage && this.state.errorInput === 'comments' ?
            <span className='error'>{this.state.errorMessage}</span> : <span><b>Comments</b></span>}
          <input className={commentsInput} name='comments'
                 onChange={this.handleInputChange} type="text"
                 value={this.state.comments} placeholder=''/>
        </div>
        <button type='submit' className='btn btn-default submit-button'>Submit</button>
      </form>
    </div>
  )}
};