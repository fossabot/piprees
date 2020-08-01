import Footer from '../styles/footer.module.css'
import { hrefClicked } from '../util/analytics.js'

export default function FooterComponent() {
  const thisYear = new Date().getFullYear()

  return (
    <section class={Footer.Container}>
      <ul class={Footer.Inner}>
        <li>
          <a id="copyright" href="/" onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="Copyright">
                ©️
              </span>
            </i>
            {thisYear} Phillip Rees
          </a>
        </li>
        <li>
          <a id="footer" href="#title" onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="Going Up...">
                🎈
              </span>
            </i>
            Back to top
          </a>
        </li>
        <li>
          <a
            href="https://github.com/piprees/piprees/commits/main"
            rel="nofollow noreferrer"
            onClick={hrefClicked}>
            <i>
              <span role="img" aria-label="Open Source">
                📖
              </span>
            </i>
            Changelog
          </a>
        </li>
      </ul>
    </section>
  )
}
