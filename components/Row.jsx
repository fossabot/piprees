import Blocks from '../styles/blocks.module.css'
import Styles from '../styles/row.module.css'
// import { rowScrolled } from '../util/analytics.js'

function rowScrolled() {
  console.log('rowScrolled')
}

export default function Row(properties) {
  const { id, children } = properties

  return (
    <div
      class={`${Blocks.Panel} ${Styles.Row}`}
      onScroll={() => rowScrolled(id)}>
      {children}
    </div>
  )
}
