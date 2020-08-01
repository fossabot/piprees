import { useState, createRef } from 'react'

import Styles from '../styles/summary.module.css'
import { summaryClicked } from '../util/analytics.js'

export default function Summary(properties) {
  const { id, text, children } = properties
  const [isOpen, setIsOpen] = useState()

  const asideRef = createRef()

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
            asideRef.current.focus()
            summaryClicked(id)
          }}
        />
        <label
          class={Styles.TabLabel}
          id={`${id}_label`}
          htmlFor={id}
          aria-expanded={isOpen}>
          {text}
        </label>
        <aside
          role="region"
          ref={asideRef}
          class={Styles.TabContent}
          aria-hidden={!isOpen}
          id={`${id}_content`}>
          {children}
        </aside>
      </div>
    </div>
  )
}
