import Head from "next/head";
import Link from "next/link";


//Components
import Navbar from '../components/modules/Navbar';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Portafolio - Luis Gabriel Gonzalez Lopez</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Main1 />
      </main>
    </div>
  );
}

const Main1 = () => {
  return (
    <section className="hero is-primary is-medium">
      {/* Hero head: will stick at the top */}
      <div className="hero-head">
        <Navbar />
      </div>
      {/* Hero content: will be in the middle */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
        </div>
      </div>
      {/* Hero footer: will stick at the bottom */}
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};
