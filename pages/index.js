import HeadMeta from '../components/HeadMeta.jsx'
import LightSwitch from '../components/LightSwitch.jsx'
import Animation from '../sections/Animation.jsx'
import Introduction from '../sections/Introduction.jsx'
import CareerSummary from '../sections/CareerSummary.jsx'
import KeyKnowledgeAreas from '../sections/KeyKnowledgeAreas.jsx'
// import GraphicalWorks from '../sections/GraphicalWorks.jsx'
// import Projects from '../sections/Projects.jsx'
// import Articles from '../sections/Articles.jsx'
import GetInTouch from '../sections/GetInTouch.jsx'
import Footer from '../components/Footer.jsx'

export default function Index() {
  return (
    <main>
      <HeadMeta />
      <LightSwitch />
      <Animation />
      <Introduction />
      <CareerSummary />
      <KeyKnowledgeAreas />
      {/* <Projects /> */}
      {/* <GraphicalWorks /> */}
      {/* <Articles /> */}
      <GetInTouch />
      <Footer />
    </main>
  )
}
