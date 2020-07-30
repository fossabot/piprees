import { useForm, ValidationError } from '@statickit/react';
import Styles from '../styles/contactform.module.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
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
      <input
        id="email"
        type="email"
        name="email"
        pattern="[^@\s]+@[^@\s]+"
        placeholder="your@email.here"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        class={Styles.ContactFormValidationError}
        errors={state.errors}
      />
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
