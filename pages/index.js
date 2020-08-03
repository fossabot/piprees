import LightSwitch from '../components/LightSwitch.jsx'
import Animation from '../components/Animation.jsx'
import Introduction from '../components/Introduction.jsx'
import CareerSummary from '../components/CareerSummary.jsx'
import KeyKnowledgeAreas from '../components/KeyKnowledgeAreas.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Footer from '../components/Footer.jsx'
import Head from 'next/head'

export const config = { amp: 'hybrid' }

const microData = `
  {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Phillip Rees",
    "alternateName": "Pip Rees",
    "address": "Swansea, United Kingdom",
    "jobTitle": "Front-End Developer & UI Designer",
    "description": "I've worked for local, government, and international clients developing solutions with code, pixels, and ink.",
    "skills": "A/B Testing, Accessibility, Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Advertising, Agile, Animation, Art Direction, Articulate Storyline, Backbone js, Bootstrap, Coffeescript, Continuous Integration, Copywriting, CSS, DevOps, Digital Learning, Git, Graphic Design, Gulp, HTML, Instructional Design, Javascript, jQuery, Motion Graphics, Node js, PHP, Prototyping, React js, REST, Sass, SEO, Software Development, Typography, Unit Testing, Usability, User Experience, UX Research, Visual Design, Web Design, Web Development, Wordpress",
    "image": "https://piprees.dev/avatar.jpg",
    "url": "https://piprees.dev/",
    "sameAs": [
      "https://linkedin.com/in/piprees",
      "https://www.behance.net/piprees",
      "https://github.com/piprees",
      "https://twitter.com/piprees",
      "https://dev.to/piprees",
      "https://my.indeed.com/p/phillipr-epg4jlw",
      "https://angel.co/u/piprees",
      "https://landing.jobs/profile/345c013471af4ae8144475"
    ]
  }
`

export default function Index() {
  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="robots"
          content="index, follow, noarchive, max-image-preview:large"
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <link rel="dns-prefetch" href="https://x.toastedanalytics.com" />
        <link rel="dns-prefetch" href="https://cdn.toastedanalytics.com" />
        <link rel="preconnect" href="https://x.toastedanalytics.com" />
        <link rel="preconnect" href="https://cdn.toastedanalytics.com" />
        <link
          rel="preload"
          as="script"
          href="/scripts.min.js"
          integrity="sha384-EBZNB8JCUL4ESwWmMLnUXME4VirnPndrQ2maUDGrT2ytwSQEEiUJKQyZWhzJYB/U"
        />
        <link rel="canonical" href="https://piprees.dev" />
        <base href="https://piprees.dev" target="_self" />
        <title>Pip Rees | Front-End Developer & UI Designer</title>
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
        <meta
          name="description"
          content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Pip Rees | Front-End Developer & UI Designer"
        />
        <meta
          property="og:site_name"
          content="Pip Rees | Front-End Developer & UI Designer"
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
          content="Pip Rees | Front-End Developer & UI Designer"
        />
        <meta
          name="twitter:description"
          content="I've worked for local, government, and international clients developing solutions with code, pixels, and ink."
        />
        <meta name="twitter:image" content="https://piprees.dev/avatar.jpg" />
        <meta name="theme-color" content="#a9dc76" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: microData }}
        />
        <script
          type="text/javascript"
          defer="defer"
          async="async"
          src="/scripts.min.js"
          integrity="sha384-EBZNB8JCUL4ESwWmMLnUXME4VirnPndrQ2maUDGrT2ytwSQEEiUJKQyZWhzJYB/U"
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
