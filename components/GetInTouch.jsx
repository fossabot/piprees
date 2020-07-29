import Blocks from '../styles/blocks.module.css';
import Link from 'next/link'

export default function GetInTouch() {
  return (
    <article class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h1 id="get-in-touch">Get In Touch</h1>
        <p id="get-in-touch-intro">
          Thanks for taking the time to find out more about my skills and experiences.
        </p>
        <p>I'm always open to hearing about exciting full-time and remote opportunities, so if you'd like to discuss roles, experience, or just have a chat, don't hesitate to contact me.</p>
        <p>I'm available by phone on weekdays after 6PM, over the weekends, or via e-mail and LinkedIn anytime.</p>
        <ul id="get-in-touch-links">
          <li><a href="https://www.linkedin.com/in/piprees" rel="noopener">LinkedIn</a></li>
          <li><a href="https://www.behance.net/piprees" rel="noopener">Behance</a></li>
          <li><a href="https://github.com/piprees" rel="noopener">GitHub</a></li>
          <li><a href="https://dev.to/piprees" rel="noopener">dev.to</a></li>
          <li><a href="https://twitter.com/piprees" rel="noopener">Twitter</a></li>
        </ul>
        <ul id="get-in-touch-resume">
          <li><a href="/Phillip Rees - Curriculum Vitae.pdf">Download CV<i>↡</i></a></li>
          <li><a href="https://my.indeed.com/p/phillipr-epg4jlw" rel="noopener">Indeed CV</a></li>
          <li><a href="https://www.behance.net/piprees/resume" rel="noopener">Behance CV</a></li>
          <li><a href="https://angel.co/u/piprees" rel="noopener">Angel.co</a></li>
          <li><a href="https://landing.jobs/profile/345c013471af4ae8144475" rel="noopener">Landing.jobs</a></li>
        </ul>
      </div>
    </article>
  )
}
