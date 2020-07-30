import Blocks from '../styles/blocks.module.css';
import ContactForm from './ContactForm.jsx';

function linkClicked(id, url) {
  try {
    window.toastedAnalytics.emit('clicked', { id, url });
  } catch (error) {
    console.warn(error);
  }
}

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
            <li><a href="https://www.linkedin.com/in/piprees" rel="nofollow noreferrer" onClick={() => linkClicked('LinkedIn', 'https://www.linkedin.com/in/piprees')}>LinkedIn</a></li>
            <li><a href="https://www.behance.net/piprees" rel="nofollow noreferrer" onClick={() => linkClicked('Behance', 'https://www.behance.net/piprees')}>Behance</a></li>
            <li><a href="https://github.com/piprees" rel="nofollow noreferrer" onClick={() => linkClicked('GitHub', 'https://github.com/piprees')}>GitHub</a></li>
            <li><a href="https://dev.to/piprees" rel="nofollow noreferrer" onClick={() => linkClicked('dev.to', 'https://dev.to/piprees')}>dev.to</a></li>
            <li><a href="https://twitter.com/piprees" rel="nofollow noreferrer" onClick={() => linkClicked('Twitter', 'https://twitter.com/piprees')}>Twitter</a></li>
          </ul>
        </div>
        <div class={Blocks.ColumnHalf}>
          <h3>Recruiting?</h3>
          <ul id="get-in-touch-resume">
            <li><a href="https://piprees.dev/PipReesCV.pdf" target="_blank" rel="nofollow noreferrer" onClick={() => linkClicked('DownloadCV', 'https://piprees.dev/PipReesCV.pdf')}>Download CV<i>↡</i></a></li>
            <li><a href="https://my.indeed.com/p/phillipr-epg4jlw" rel="nofollow noreferrer" onClick={() => linkClicked('Indeed', 'https://my.indeed.com/p/phillipr-epg4jlw')}>Indeed</a></li>
            <li><a href="https://www.behance.net/piprees/resume" rel="nofollow noreferrer" onClick={() => linkClicked('Behance', 'https://www.behance.net/piprees/resume')}>Behance</a></li>
            <li><a href="https://angel.co/u/piprees" rel="nofollow noreferrer" onClick={() => linkClicked('Angel.co', 'https://angel.co/u/piprees')}>Angel.co</a></li>
            <li><a href="https://landing.jobs/profile/345c013471af4ae8144475" rel="nofollow noreferrer" onClick={() => linkClicked('Landing.jobs', 'https://landing.jobs/profile/345c013471af4ae8144475')}>Landing.jobs</a></li>
          </ul>
        </div>

      </section>
    </>
  )
}
