import Blocks from '../styles/blocks.module.css'
import List from '../components/List.jsx'
import { hrefClicked } from '../util/analytics.js'
import articles from '../data/articles.json'

export default function Articles() {
  return (
    <section class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h2 id="articles">
          <a href="#articles" onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="Notes">
                🗒️
              </span>
            </i>
            Articles
          </a>
        </h2>
        <List id="articles" items={articles} />
      </div>
    </section>
  )
}
