import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from 'next/router'

const index = () => {

  useEffect(() => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item" href="/">
              <Image
                  src="/Assets/img/logo.png"
                  alt="Logo"
                  layout={"fixed"}
                  width={100}
                  height={100}
              />
            </a>
          </Link>
          <span className="navbar-burger" data-target="navbarMenuHeroA">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item">Inicio</a>
            </Link>
            <Link href="/blog">
              <a className="navbar-item">Blog</a>
            </Link>
            <Link href="/lista-proyectos">
              <a className="navbar-item">Trabajos</a>
            </Link>
            <Link href="/contacto">
              <a className="navbar-item">Contacto</a>
            </Link>
            <span className="navbar-item">
              <Link href="https://github.com/LuisGonzalez321">
                <a
                  className="button is-primary is-inverted"
                  href="https://github.com/LuisGonzalez321"
                >
                  <span className="icon">
                    <i className="fab fa-github" />
                  </span>
                  <span>Github</span>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
