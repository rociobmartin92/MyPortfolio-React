export function Home() {
  return (
    <>
      <section id="Home">
        <div className="containerHome">
          <div className="borde left"></div>
          <div className="img-texto">
            <div className="texto">
              <h1 className="animate__animated animate__lightSpeedInRight">
                Rocío Martín
              </h1>
              <br />
              <h1 className="animate__animated animate__flip">
                Front-End Developer<span className="guion">_</span>
              </h1>
              <br />

              <div className="contacto-icons-home">
                <div className="contacto-icons-home_a">
                  <a
                    href="https://api.whatsapp.com/send?phone=542984391081&text="
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-whatsapp fa-lg"
                      style={{ color: "#fffbfe" }}
                    ></i>
                  </a>
                </div>
                <div className="contacto-icons-home_a">
                  <a href="mailto:martinrocio.1992@gmail.com" target="_blank">
                    <i
                      className="fa-solid fa-envelope g"
                      style={{ color: "#fffbfe" }}
                    ></i>
                  </a>
                </div>
                <div className="contacto-icons-home_a">
                  <a
                    href="https://www.linkedin.com/in/roc%C3%ADo-martin-953978146/?msgControlName=reply_to_sender&msgConversationId=2-NTU5NDM5ZWUtNzgwYy00N2VjLWJjYmMtOGZiNmZkMTZmMWZiXzAxMw%3D%3D&msgOverlay=true"
                    target="_blank"
                  >
                    <i
                      className="fa-solid fa-sheet-plastic"
                      style={{ color: "#fffbfe" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="borde right"></div>
        </div>
      </section>
    </>
  );
}
