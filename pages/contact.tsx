import MailForm from '../components/MailForm';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MailForm /> //Our form goes here
      </div>
    );
  }
}

export default Contact;
