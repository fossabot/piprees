import Blocks from '../styles/blocks.module.css'
import Animation from '../styles/animation.module.css'

export default function AnimationComponent() {
  return (
    <div tabIndex="-1" class={Blocks.Container}>
      <div class={Animation.Animation} />
    </div>
  )
}
