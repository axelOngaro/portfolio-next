import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/MailForm.module.css';
import Button from './Button';

export default function MailForm() {
  return (
    <div>
      <div className={styles.container}>
        <h1>Contact me</h1>
        <form className={styles.contact_form} onSubmit={(e) => this.formSubmit(e)}>
          <div>
            <label class="message-name" htmlFor="message-name">
              Your Name
            </label>
            <input name="name" class="message-name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <div>
              <label class="message-email" htmlFor="message-email">
                Your Email
              </label>
              <input
                name="email"
                class="message-email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <label class="message" htmlFor="message-input">
            Your Message
          </label>
          <textarea
            name="message"
            class="message-input"
            type="text"
            placeholder="Please write your message here"
            required
          />

          <Button classname={styles.button} name="submit" />
        </form>
      </div>
    </div>
  );
}
