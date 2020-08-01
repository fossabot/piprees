import Footer from '../styles/footer.module.css'
import { linkClicked } from '../util/analytics.js'

export default function FooterComponent() {
  const thisYear = new Date().getFullYear()

  return (
    <section class={Footer.Container}>
      <ul class={Footer.Inner}>
        <li>
          <a id="copyright" href="/">
            <i>©️</i>
            {thisYear} Phillip Rees
          </a>
        </li>
        <li>
          <a id="footer" href="#title">
            <i>🎈</i>Back to top
          </a>
        </li>
        <li>
          <a
            href="https://github.com/piprees/piprees/commits/main"
            rel="nofollow noreferrer"
            onClick={() =>
              linkClicked(
                'Repo',
                'https://github.com/piprees/piprees/commits/main'
              )
            }>
            <i>📖</i>Changelog
          </a>
        </li>
      </ul>
    </section>
  )
}
