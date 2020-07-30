import { useForm, ValidationError } from '@statickit/react';
import useLocalStorage from '../hooks/useLocalStorage.js'
import Styles from '../styles/contactform.module.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [submitted, handleSubmitted] = useLocalStorage('message_sent', false);

  if (state.succeeded || !!submitted) {
    handleSubmitted(true);
    return (
      <div class={Styles.ContactForm}>
        <h3>Thanks for the message!</h3>
        <p>I&apos;ll get back to you as soon as I can.</p>
      </div>
    );
  }

  return (
    <form class={Styles.ContactForm} onSubmit={handleSubmit}>
      <h3>Message me</h3>
      <label htmlFor="email">Your Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        pattern="[^@\s]+@[^@\s]+"
        placeholder="your@email.here"
        autoComplete="on"
        autoCapitalize="off"
        autoCorrect="off"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        class={Styles.ContactFormValidationError}
        errors={state.errors}
      />
      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        pattern="[^@\s]+"
        placeholder="Hi Pip! Well, if the coffee's first rate, then so is everything else..."
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        class={Styles.ContactFormValidationError}
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}

export default ContactForm;
