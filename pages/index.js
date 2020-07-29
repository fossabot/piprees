import Introduction from '../components/Introduction.jsx'
import CareerSummary from '../components/CareerSummary.jsx'
import KeyKnowledgeAreas from '../components/KeyKnowledgeAreas.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Pip Rees | UI Designer & Front-End Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink." />
      </Head>
      <Introduction />
      <CareerSummary />
      <KeyKnowledgeAreas />
      <GetInTouch />
    </>
  )
}
