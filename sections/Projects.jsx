import Blocks from '../styles/blocks.module.css'
import Row from '../components/Row.jsx'
import { hrefClicked } from '../util/analytics.js'

export default function Projects() {
  return (
    <section class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h2 id="projects">
          <a href="#projects" onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="Map">
                🗺️
              </span>
            </i>
            Projects
          </a>
        </h2>
        <Row id="projects" />
      </div>
    </section>
  )
}
