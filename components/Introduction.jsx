import Blocks from '../styles/blocks.module.css';
import Summary from './Summary.jsx';

export default function Introduction() {
  return (
    <section class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h1 id="title"><a href="#title"><i>🍵</i>Phillip Rees</a></h1>
        <p id="subtitle"><em>UI Designer</em> & Front-End Developer</p>
        <Summary id="intro" text="I&apos;ve worked for local, government, and international clients developing solutions with code, pixels, and ink.">
          <p>I get inspired by new ideas and I love discovering age-old strategies and wisdom. I know the value of designing for inclusivity right from the get-go, and I take our user&apos;s needs seriously.</p>
          <p>I never shy away from trying something different if it brings our team and the business real value. I see constraints as an opportunity for innovative ideas to flourish, and I love finding simple solutions to complex problems.</p>
        </Summary>
      </div>
    </section>
  )
}
