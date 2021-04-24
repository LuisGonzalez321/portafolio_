import Image from 'next/image';

const index = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <Image
              src="/Assets/img/logo.png"
              alt="Logo"
              layout={'fixed'}
              width={100}
              height={100}
            />
          </a>
          <span className="navbar-burger" data-target="navbarMenuHeroA">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">Inicio</a>
            <a className="navbar-item">Blog</a>
            <a className="navbar-item">Trabajos</a>
            <a className="navbar-item">Contacto</a>
            <span className="navbar-item">
              <a className="button is-primary is-inverted">
                <span className="icon">
                  <i className="fab fa-github" />
                </span>
                <span>Github</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
