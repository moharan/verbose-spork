import './../styles/globals.css';
import "./../configureAmplify";
import Image from "next/image";
import Logo from "./../images/sismoguia.svg";
import Navbar from "./components/navbar";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {

  return (
    <div className="contain-page">
    <div className="menu">
      <Navbar/>
      <Image src={Logo} layout="responsive" width={200} height={200} priority="true"/>
    </div>
    <div className="init">
    <Component {...pageProps} />
    </div>
    </div>
  )
}

export default MyApp
