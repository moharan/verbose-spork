import './../styles/globals.css';
import "./../configureAmplify";
import Navbar from "./components/navbar"


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <div className="">
    <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
