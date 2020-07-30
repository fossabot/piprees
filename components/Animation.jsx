import Blocks from '../styles/blocks.module.css';
import Styles from '../styles/animation.module.css';

export default function Animation() {
  return (
    <div tabIndex="-1" class={Blocks.Container}>
      <div class={Styles.Animation} />
    </div>
  )
}
