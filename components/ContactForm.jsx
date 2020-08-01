import { useForm, ValidationError } from '@statickit/react'
import { useState, useEffect } from 'react'
import useStorage from '../util/useStorage.js'
import { contactFormClicked } from '../util/analytics.js'
import ContactForm from '../styles/contactform.module.css'

export default function ContactFormComponent() {
  const [, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const [state, handleSubmit] = useForm('contactForm')
  const [submitted, handleSubmitted] = useStorage(
    'local',
    'message_sent',
    false
  )
  const [storedEmail, setEmail] = useStorage('session', 'message_email', null)
  const [storedContent, setContent] = useStorage(
    'session',
    'message_content',
    null
  )

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
      <h3>
        Message me{' '}
        {storedEmail || storedContent ? (
          <span class={ContactForm.Saved}>Draft Saved</span>
        ) : null}
      </h3>

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
        onBlur={event => setEmail(event.target.value)}
        value={storedEmail || ''}
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
        onBlur={event => setContent(event.target.value)}
        value={storedContent || ''}
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
