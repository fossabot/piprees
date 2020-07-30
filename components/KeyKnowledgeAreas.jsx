import Blocks from '../styles/blocks.module.css';

export default function KeyKnowledgeAreas() {
  return (
    <section class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h2 id="key-knowledge-areas">Key Knowledge Areas</h2>
        <ul id="key-knowledge-areas-items">
          <li>JavaScript ES6+ & JS Frameworks</li>
          <li>Cross-Browser Development & Responsive Design</li>
          <li>Web Performance Optimisation</li>
          <li>Node.js & Continuous Integration</li>
          <li>Front-End Debugging & JavaScript Unit Testing</li>
          <li>SEO, Analytics, and A/B Testing</li>
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
