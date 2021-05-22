import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

//Components
import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import Cardtechno from "../components/elements/Cardtechno";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Portafolio - Luis Gabriel Gonzalez Lopez</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Main1 />
        <Main2 />
      </main>
      <Footer />
    </div>
  );
}

const Main1 = () => {
  return (
    <section className="hero is-medium">
      {/* Hero head: will stick at the top */}
      <div className="hero-head">
        <Navbar />
      </div>
      {/* Hero content: will be in the middle */}
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="title has-text-left">
                  Hola, soy Luis Gonzalez <br /> Desarrollador web jr.{" "}
                </p>
                <p className="subtitle has-text-left mt-4">
                  Hola bienvenido, soy un joven siempre dispuesto a aprender y
                  siempre dispuesto a enseñar. Unos de los temas que me fascinan
                  son las matemáticas, física y la programación.
                </p>
                <div className="is-flex is-justify-content-flex-start">
                  <Link href="/lista-proyectos">
                    <a href="/lista-proyectos" className="button is-primary">
                      Ver proyectos
                    </a>
                  </Link>
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Main2 = () => {

  const [data, useData] = useState([]);
 
  useEffect(() => {
    fetch('https://admin-portafolio.herokuapp.com/areas')
      .then((res) => console.log(res.json()))
      .catch((err) => {});
  });

  return (
    <section className="section">
      <h2 className="title is-size-2 has-text-centered">
        TECNOLOGIAS CON LAS QUE TRABAJO
      </h2>
      <Cardtechno area="Front-end" listElement={[]} />
    </section>
  );
};
