import { rjceramic, wqapp, sukin } from "./imagesProyects";

export function Projects() {
  const mostrarClick = (descripcion) => {
    const texto = document.querySelectorAll(".descripcion-proyecto");
    texto.forEach((content) => {
      content.classList.remove("active");
      if (content.classList.contains(descripcion)) {
        content.classList.add("active");
      }
    });
  };
  return (
    <section id="Projects">
      <div className="container-proyectos">
        <h1>Some of my public projects</h1>
        <div className="proyectos">
          <input type="radio" name="slider" id="item-1" />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" defaultChecked />
          <div className="sliders">
            <label
              className="slide"
              htmlFor="item-1"
              id="selector-1"
              onClick={() => mostrarClick("Dental-Care")}
            >
              <img src={rjceramic} alt="" />
            </label>
            <label
              className="slide"
              htmlFor="item-2"
              id="selector-2"
              onClick={() => mostrarClick("Biblioteca")}
            >
              <img src={wqapp} alt="" />
            </label>
            <label
              className="slide"
              htmlFor="item-3"
              id="selector-3"
              onClick={() => mostrarClick("iMovies")}
            >
              <img src={sukin} alt="" />
            </label>
          </div>
          <div className="descripcion-proyecto Dental-Care">
            <p>
              <h3 style={{ marginBottom: 10, marginTop: -20 }}>RJ Cerámica</h3>
              <button className="btnProyectos">
                <a
                  href="https://github.com/rociobmartin92/eCommerce-rj-ceramic-studio"
                  target="_blank"
                >
                  Link al repo
                </a>
              </button>
              <br /> <br />
              E-commerce mobile app to buy handmade ceramic products. <br /> I
              made this app from scratch using firebase as a real time data
              base, redux as a store management and React Native and JS for
              front end.
            </p>
          </div>
          <div className="descripcion-proyecto Biblioteca">
            <p>
              <h3 style={{ marginBottom: 10, marginTop: -20 }}>
                Weather Query App:
              </h3>
              <button className="btnProyectos">
                <a
                  href="https://github.com/rociobmartin92/Weather-Query-React-Native"
                  target="_blank"
                >
                  Link al repo
                </a>
              </button>
              <br /> <br />
              Mobile application for consulting weather in real-time in
              different cities of Argentina using a public API <br />
              apis.datos.gob.ar/georef.
            </p>
          </div>
          <div className="descripcion-proyecto iMovies active">
            <p>
              <h3 style={{ marginBottom: 10, marginTop: -20 }}>
                Sukin Australian-Web:
              </h3>
              <button className="btnProyectos">
                <a
                  href="https://github.com/rociobmartin92/Sukin-app-ec"
                  target="_blank"
                >
                  Link al repo
                </a>
              </button>
              <br /> <br />I took as inspiration a brand that I love and I used
              it when I was in Australia. This web was made with react, js, and
              redux-toolkit as the store management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
