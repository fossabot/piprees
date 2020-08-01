import { StaticKitProvider } from '@statickit/react'
// import App from 'next/app'
import '../styles/index.css'

function PipReesDev({ Component, pageProps }) {
  return (
    <StaticKitProvider site="27dac50cfae0">
      <Component {...pageProps} />
    </StaticKitProvider>
  )
}

export default PipReesDev
