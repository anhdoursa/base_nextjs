import EmptyLayout from '@/components/layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout
  return <Layout><Component {...pageProps} /></Layout>
}
