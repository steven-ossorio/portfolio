import Header from "../component/header.component";
import "../styles/globals.css";
import "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
