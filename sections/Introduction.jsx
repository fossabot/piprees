import Blocks from '../styles/blocks.module.css'
import Summary from '../components/Summary.jsx'
import { hrefClicked } from '../util/analytics.js'

export default function IntroductionComponent() {
  return (
    <header class={Blocks.Container} role="banner">
      <div class={Blocks.Column}>
        <h1 id="title">
          <a href="#title" onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="I like matcha latte">
                🍵
              </span>
            </i>
            <abbr title="Pip, short for Phillip">Pip</abbr> Rees
          </a>
        </h1>
        <p id="subtitle">
          Front-End Developer &amp;{' '}
          <em>
            <abbr title="User Interface">UI</abbr> Designer
          </em>
        </p>
        <Summary
          id="intro"
          text="I've worked for local, government, and international clients developing solutions with code, pixels, and ink.">
          <p>
            I get inspired by new ideas and I love discovering age-old
            strategies and wisdom. I know the value of designing for inclusivity
            right from the get-go, and I take our user&apos;s needs seriously.
          </p>
          <p>
            I never shy away from trying something different if it brings our
            team and the business real value. I see constraints as an
            opportunity for innovative ideas to flourish, and I love finding
            simple solutions to complex problems.
          </p>
        </Summary>
      </div>
    </header>
  )
}
