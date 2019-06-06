import React, { Component } from 'react';
import firebase from './../../firebase';
import './info.css';

class Info extends Component {

  constructor() {
    super();
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const emailsRef = firebase.database().ref('emails');
    const item = {
      email: this.state.email
    }
    emailsRef.push(item);
    this.setState({
      email: ''
    });
  }

  render() {
    return (
      <div className='row justify-content-md-center mt-5 mb-5 text-white' style={{fontFamily: 'Poppins'}}>
        <div className='col-md-6 border border-light rounded-lg p-4 mt-5 mb-5'>
          <h2>Welcome to Smart Kara!</h2>
          <p className='text-left pt-2 pb-2'> Smart Kara is wearable technology that monitors your health and keeps track of all your fitness goals. Our unique design transforms your wrist into a personal companion that helps you stay motivated and connected. </p>
            <p>Smart Kara is currently in the works; it will be coming to the market soon. </p>
            <p>Sign-up for Updates on Smart Kara!</p>
          <section className='add-email'>
            <form onSubmit={this.handleSubmit}>
                <input className='rounded-lg mt-2' id='emailInput' type="email" name="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email} />
              <button type='submit' className='btn btn-primary btn-block rounded-lg mt-2' >Submit</button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default Info;