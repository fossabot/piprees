import Styles from '../styles/list.module.css'

import { hrefClicked } from '../util/analytics.js'

function ListItem(properties) {
  const { title, image, alt, date, snippet, link } = properties

  return (
    <article class={Styles.ListItem}>
      <h1>{title}</h1>
      <span>{date}</span>
      <img src={image} alt={alt} loading="lazy" />
      <p>{snippet}</p>
      <a
        href={link}
        target="_self"
        rel="nofollow noreferrer"
        onClick={event => hrefClicked(event, title)}>
        Read more
      </a>
    </article>
  )
}

export default function List(properties) {
  const { id, items } = properties

  return (
    <div class={Styles.List}>
      {items.map((item, index) => (
        <ListItem {...item} listId={id} index={index} key={item.id} />
      ))}
    </div>
  )
}
