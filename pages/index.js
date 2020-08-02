import LightSwitch from '../components/LightSwitch.jsx'
import Animation from '../components/Animation.jsx'
import Introduction from '../components/Introduction.jsx'
import CareerSummary from '../components/CareerSummary.jsx'
import KeyKnowledgeAreas from '../components/KeyKnowledgeAreas.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Footer from '../components/Footer.jsx'
import Head from 'next/head'

export default function Index() {
  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="dns-prefetch" href="https://x.toastedanalytics.com" />
        <link rel="dns-prefetch" href="https://cdn.toastedanalytics.com" />
        <link rel="preconnect" href="https://x.toastedanalytics.com" />
        <link rel="preconnect" href="https://cdn.toastedanalytics.com" />
        <link
          rel="preload"
          as="script"
          href="/scripts.js"
          integrity="sha384-VXJeoh/WRo1P0ZvMjqhyWPW5ell44QvH0Y2hKk4/MAEJ1WZK7AymSuComkO85k4J"
        />
        <link
          rel="preload"
          as="script"
          href="https://x.toastedanalytics.com/bundle.js"
        />
        <title>Pip Rees | UI Designer & Front-End Developer</title>
        <link rel="canonical" href="http://piprees.dev" />
        <meta
          name="description"
          content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Pip Rees | UI Designer & Front-End Developer"
        />
        <meta
          property="og:site_name"
          content="Pip Rees | UI Designer & Front-End Developer"
        />
        <meta property="og:url" content="https://piprees.dev" />
        <meta property="og:image" content="https://piprees.dev/avatar.jpg" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_GB" />
        <meta property="profile:username" content="piprees" />
        <meta property="profile:first_name" content="Pip" />
        <meta property="profile:last_name" content="Rees" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@piprees" />
        <meta name="twitter:site" content="@piprees" />
        <meta
          name="twitter:title"
          content="Pip Rees | UI Designer & Front-End Developer"
        />
        <meta
          name="twitter:description"
          content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink."
        />
        <meta name="twitter:image" content="https://piprees.dev/avatar.jpg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#a9dc76" />
        <script
          type="text/javascript"
          defer
          src="/scripts.js"
          integrity="sha384-VXJeoh/WRo1P0ZvMjqhyWPW5ell44QvH0Y2hKk4/MAEJ1WZK7AymSuComkO85k4J"
        />
        <script
          type="text/javascript"
          defer
          src="https://x.toastedanalytics.com/bundle.js"
        />
      </Head>
      <LightSwitch />
      <Animation />
      <Introduction />
      <CareerSummary />
      <KeyKnowledgeAreas />
      <GetInTouch />
      <Footer />
    </main>
  )
}
