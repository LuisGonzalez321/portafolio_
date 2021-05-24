import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

//Components
import Navbar from "../../components/modules/Navbar";
import Footer from "../../components/modules/Footer";
import CardProject from '../../components/elements/CardProject';

export default function index() {
  return (
      <div>
        <Head>
          <title>Lista Proyectos - Luis Gabriel Gonzalez Lopez</title>
          <meta name="description" content="" />
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
          <Main1 />
        </main>
        <Footer />
      </div>
  );
}

const Main1 = () => {

  const [repos, useRepos] = useState(null);

  useEffect(() => {
      axios.get('https://api.github.com/users/LuisGonzalez321/repos')
          .then((res) => useRepos(res.data))
          .catch(() => {});
  }, [])

  return (
      <section className="section section-main">
        <h1 className='title is-2 has-text-centered'>Lista de proyectos</h1>
          <div className='is-flex is-flex-wrap-wrap'>
              {repos === null ? null: repos.map((item, i) => <CardProject key={i + item.id} item={item} />)}
          </div>
      </section>
  );
};
