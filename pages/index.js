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
      </Head>
      <Introduction />
      <CareerSummary />
      <KeyKnowledgeAreas />
      <GetInTouch />
    </>
  )
}
