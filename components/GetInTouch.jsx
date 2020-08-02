import Icon from '../util/Icon.jsx'

import {
  faLinkedin,
  faBehance,
  faGithub,
  faDev,
  faTwitter,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons'

import Blocks from '../styles/blocks.module.css'
import { hrefClicked } from '../util/analytics.js'
import ContactForm from './ContactForm.jsx'

export default function GetInTouchComponent() {
  return (
    <>
      <section class={Blocks.Container}>
        <div class={Blocks.Column}>
          <h2 id="contact">
            <a href="#contact" onClick={hrefClicked}>
              <i>
                <span role="img" aria-label="Send a letter">
                  📧
                </span>
              </i>
              Get In Touch
            </a>
          </h2>
          <p id="contact-intro">
            I&apos;m always open to hearing about exciting full-time and remote
            opportunities, so if you&apos;d like to discuss roles, experience,
            or just have a chat, don&apos;t hesitate to contact me.
          </p>
          <ContactForm />
        </div>
      </section>
      <section class={Blocks.Container}>
        <div class={Blocks.ColumnThin}>
          <h3 id="hangouts">
            <a href="#hangouts" onClick={hrefClicked}>
              <i>
                <span role="img" aria-label="Pointing to the right place">
                  👉
                </span>
              </i>
              Hangouts
            </a>
          </h3>
          <ul id="contact-links">
            <li>
              <a
                href="https://www.linkedin.com/in/piprees"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={faLinkedin} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/piprees"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={faBehance} />
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://github.com/piprees"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={faGithub} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/piprees"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={faDev} />
                dev.to
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/piprees"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={faTwitter} />
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div class={Blocks.ColumnThin}>
          <h3 id="recruiting">
            <a href="#recruiting" onClick={hrefClicked}>
              <i>
                <span role="img" aria-label="A tick in the box">
                  ✅
                </span>
              </i>
              Recruiting?
            </a>
          </h3>
          <ul id="contact-resume">
            <li>
              <a
                href="/PipReesCV.pdf"
                target="_blank"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <i>
                  <span role="img" aria-label="My Documentation">
                    📝
                  </span>
                </i>
                Download CV
              </a>
            </li>
            <li>
              <a
                href="https://my.indeed.com/p/phillipr-epg4jlw"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={'indeed'} />
                Indeed
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/piprees/resume"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={faBehance} />
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://angel.co/u/piprees"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={faAngellist} />
                Angel.co
              </a>
            </li>
            <li>
              <a
                href="https://landing.jobs/profile/345c013471af4ae8144475"
                rel="nofollow noreferrer"
                onClick={hrefClicked}>
                <Icon icon={'landingjobs'} />
                Landing.jobs
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
