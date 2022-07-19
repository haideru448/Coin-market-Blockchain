import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://ygosd85wdf9k.usemoralis.com:2053/server'
      appId='UFRafkX1IrVUgbBt3xlNwh2YBr0CybHGIwPV8NHW'
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp
