import { useState } from 'react'

import Styles from '../styles/summary.module.css'
import { summaryClicked } from '../util/analytics.js'

export default function Summary(properties) {
  const { id, text, children } = properties
  const [isOpen, setIsOpen] = useState()

  return (
    <div class={Styles.Tabs}>
      <div class={Styles.Tab}>
        <input
          type="checkbox"
          id={id}
          aria-labelledby={`${id}_label`}
          aria-controls={`${id}_content`}
          onChange={() => {
            setIsOpen(!isOpen)
            summaryClicked(id)
          }}
        />
        <label class={Styles.TabLabel} id={`${id}_label`} htmlFor={id}>
          {text}
        </label>
        <aside
          class={Styles.TabContent}
          id={`${id}_content`}
          aria-expanded={isOpen}>
          {children}
        </aside>
      </div>
    </div>
  )
}
