import Blocks from '../styles/blocks.module.css'
import { hrefClicked } from '../util/analytics.js'

export default function KeyKnowledgeAreasComponent() {
  return (
    <section class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h2 id="knowledge">
          <a href="#knowledge" onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="Lightbulb moments">
                💡
              </span>
            </i>
            Key Knowledge Areas
          </a>
        </h2>
        <ul id="knowledge-areas">
          <li>
            JavaScript <abbr title="ECMAScript 6+">ES6+</abbr> & JS Frameworks
          </li>
          <li>Cross-Browser Development & Responsive Design</li>
          <li>Web Performance Optimisation</li>
          <li>Node.js & Continuous Integration</li>
          <li>Front-End Debugging & JavaScript Unit Testing</li>
          <li>
            <abbr title="Search Engine Optimisation">SEO</abbr>, Analytics, and
            A/B Testing
          </li>
          <li>Presenting, Pitching, & Product Ownership</li>
          <li>Visual Design & Corporate Branding</li>
          <li>User Experience Design Patterns</li>
          <li>Accessibility & Inclusive Design</li>
          <li>Print & Mixed Media Design</li>
        </ul>
      </div>
    </section>
  )
}
