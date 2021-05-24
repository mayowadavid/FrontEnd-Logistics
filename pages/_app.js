// Main CSS
import Layout from '../components/Layout'
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp