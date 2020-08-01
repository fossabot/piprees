import { differenceInYears } from 'date-fns'

import Blocks from '../styles/blocks.module.css'
import Summary from './Summary.jsx'

export default function CareerSummaryComponent() {
  const now = Date.now()
  const frontendDate = new Date('2017-04-01')
  const graphicsDate = new Date('2015-08-01')

  return (
    <section class={Blocks.Container}>
      <div class={Blocks.Column}>
        <h2 id="career">
          <a href="#career">
            <i>
              <span role="img" aria-label="The tech guy">
                👨‍💻
              </span>
            </i>
            Career Summary
          </a>
        </h2>
        <ul id="career-key-points">
          <li>
            {differenceInYears(now, graphicsDate)} years Industry Graphic & UI
            Design experience
          </li>
          <li>
            {differenceInYears(now, frontendDate)} years Professional Front-End
            Development experience
          </li>
        </ul>
        <Summary
          id="career-summary"
          text="At Cruise Nation, I work closely with management, marketing, and product teams to design, implement, and regularly ship web features, optimisations, and UI improvements to thousands of visitors every month across a wide range of browsers and devices as part of an award-winning digital team.">
          <p>
            In my previous role at CDSM, I worked to tight deadlines for
            demanding clients like Hwb, Mitsubishi, and Boots to create bespoke,
            professional E-Learning experiences and admin dashboards. I was
            hired as a Graphic Designer, became an E-Learning UI designer, and
            worked my way up to Front-End Developer.
          </p>
          <p>
            Before that, I helped small business clients to create easy to
            manage websites using WordPress and got to flex both my design and
            development skills creating custom themes to their specifications.
          </p>
        </Summary>
      </div>
    </section>
  )
}
