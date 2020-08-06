import Blocks from '../styles/blocks.module.css'
import Row from '../components/Row.jsx'
import { hrefClicked } from '../util/analytics.js'

export default function GraphicalWorks() {
  return (
    <section class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h2 id="graphics">
          <a href="#graphics" onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="A paintbrush">
                🖌️
              </span>
            </i>
            Graphical Works
          </a>
        </h2>
        <Row id="graphics">
          <aside>One</aside>
          <aside>Two</aside>
          <aside>Three</aside>
        </Row>
      </div>
    </section>
  )
}
