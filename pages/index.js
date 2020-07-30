import Animation from '../components/Animation.jsx'
import Introduction from '../components/Introduction.jsx'
import CareerSummary from '../components/CareerSummary.jsx'
import KeyKnowledgeAreas from '../components/KeyKnowledgeAreas.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Head from 'next/head'

export default function Index() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Pip Rees | UI Designer & Front-End Developer</title>
        <meta name="description" content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink." />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Pip Rees | UI Designer & Front-End Developer" />
        <meta property="og:url" content="https://piprees.dev" />
        <meta property="og:image" content="https://piprees.dev/avatar.jpg" />
        <meta property="profile:first_name" content="Phillip" />
        <meta property="profile:last_name" content="Rees" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@piprees" />
        <meta name="twitter:title" content="Pip Rees | UI Designer & Front-End Developer" />
        <meta name="twitter:description" content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink." />
        <meta name="twitter:image" content="https://piprees.dev/avatar.jpg" />
      </Head>
      <Animation />
      <Introduction />
      <CareerSummary />
      <KeyKnowledgeAreas />
      <GetInTouch />
    </main>
  )
}
