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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="dns-prefetch" href="https://x.toastedanalytics.com" />
        <link rel="dns-prefetch" href="https://cdn.toastedanalytics.com" />
        <link rel="preconnect" href="https://x.toastedanalytics.com" />
        <link rel="preconnect" href="https://cdn.toastedanalytics.com" />
        <link
          rel="preload"
          as="script"
          href="/scripts.js"
          integrity="sha384-imLVLdnnlqROIVuF7A1yaDszq6pjaa3m4U3f+OjKtcn9kwg8dYFHumCpRQDWOyBg"
        />
        <link
          rel="preload"
          as="script"
          href="https://x.toastedanalytics.com/bundle.js"
        />
        <title>Pip Rees | UI Designer & Front-End Developer</title>
        <meta
          name="description"
          content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Pip Rees | UI Designer & Front-End Developer"
        />
        <meta property="og:url" content="https://piprees.dev" />
        <meta property="og:image" content="/avatar.jpg" />
        <meta property="profile:first_name" content="Phillip" />
        <meta property="profile:last_name" content="Rees" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@piprees" />
        <meta
          name="twitter:title"
          content="Pip Rees | UI Designer & Front-End Developer"
        />
        <meta
          name="twitter:description"
          content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink."
        />
        <meta name="twitter:image" content="/avatar.jpg" />
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
          integrity="sha384-imLVLdnnlqROIVuF7A1yaDszq6pjaa3m4U3f+OjKtcn9kwg8dYFHumCpRQDWOyBg"
        />
        <script
          type="text/javascript"
          defer
          src="https://x.toastedanalytics.com/bundle.js"
        />
      </Head>
      <Animation />
      <Introduction />
      <CareerSummary />
      <KeyKnowledgeAreas />
      <GetInTouch />
      <Footer />
      <LightSwitch />
    </main>
  )
}
