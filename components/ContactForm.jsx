import { useForm, ValidationError } from '@statickit/react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { contactFormClicked } from '../util/analytics.js'
import ContactForm from '../styles/contactform.module.css'

export default function ContactFormComponent() {
  const [state, handleSubmit] = useForm('contactForm')
  const [submitted, handleSubmitted] = useLocalStorage('message_sent', false)

  if (state.succeeded || !!submitted) {
    handleSubmitted(true)
    return (
      <div class={`${ContactForm.Form} ${ContactForm.Confirmed}`}>
        <h3>
          <i>
            <span role="img" aria-label="Woohoo!">
              🎉
            </span>
          </i>{' '}
          Thanks for the message!
        </h3>
        <p>I&apos;ll get back to you as soon as I have a moment.</p>
        <p>Feel free to connect with me on other platforms in the meantime!</p>
      </div>
    )
  }

  return (
    <form class={ContactForm.Form} onSubmit={handleSubmit}>
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
        onClick={() => contactFormClicked('email')}
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        class={ContactForm.ValidationError}
        errors={state.errors}
      />
      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        pattern="[^@\s]+"
        placeholder="Hi Pip! Well, if the coffee's first rate, then so is everything else..."
        onClick={() => contactFormClicked('message')}
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        class={ContactForm.ValidationError}
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        onClick={() => contactFormClicked('button')}>
        Send
      </button>
    </form>
  )
}
