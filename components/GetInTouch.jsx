import Blocks from '../styles/blocks.module.css';
import ContactForm from './ContactForm.jsx';

export default function GetInTouch() {
  return (
    <>
      <section class={Blocks.Container}>
        <div class={Blocks.Column}>
          <h2 id="get-in-touch">Get In Touch</h2>
          <p id="get-in-touch-intro">I&apos;m always open to hearing about exciting full-time and remote opportunities, so if you&apos;d like to discuss roles, experience, or just have a chat, don&apos;t hesitate to contact me.</p>

          <ContactForm />
        </div>
      </section>
      <section class={Blocks.Container}>
        <div class={Blocks.ColumnHalf}>
          <h3>Hangouts</h3>
          <ul id="get-in-touch-links">
            <li><a href="https://www.linkedin.com/in/piprees" rel="nofollow noreferrer">LinkedIn</a></li>
            <li><a href="https://www.behance.net/piprees" rel="nofollow noreferrer">Behance</a></li>
            <li><a href="https://github.com/piprees" rel="nofollow noreferrer">GitHub</a></li>
            <li><a href="https://dev.to/piprees" rel="nofollow noreferrer">dev.to</a></li>
            <li><a href="https://twitter.com/piprees" rel="nofollow noreferrer">Twitter</a></li>
          </ul>
        </div>
        <div class={Blocks.ColumnHalf}>
          <h3>Recruiting?</h3>
          <ul id="get-in-touch-resume">
            <li><a href="https://piprees.dev/PipReesCV.pdf" target="_blank" rel="nofollow noreferrer">Download CV<i>↡</i></a></li>
            <li><a href="https://my.indeed.com/p/phillipr-epg4jlw" rel="nofollow noreferrer">Indeed</a></li>
            <li><a href="https://www.behance.net/piprees/resume" rel="nofollow noreferrer">Behance</a></li>
            <li><a href="https://angel.co/u/piprees" rel="nofollow noreferrer">Angel.co</a></li>
            <li><a href="https://landing.jobs/profile/345c013471af4ae8144475" rel="nofollow noreferrer">Landing.jobs</a></li>
          </ul>
        </div>

      </section>
    </>
  )
}
