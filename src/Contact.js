export function Contact() {
  return (
    <footer>
      <section id="Contact">
        <div className="containerContact">
          <h1>Contacto</h1>
          <div className="icons">
            <div className="contenedor-a">
              <a
                href="https://api.whatsapp.com/send?phone=542984391081&text="
                target="_blank"
              >
                <i
                  className="fa-brands fa-whatsapp fa-2xl"
                  style={{ color: "#fffbfe" }}
                ></i>
                <br />
                WhatsApp
              </a>
            </div>
            <div className="contenedor-a">
              <a href="mailto:martinrocio.1992@gmail.com" target="_blank">
                <i
                  className="fa-solid fa-envelope g fa-2xl"
                  style={{ color: "#fffbfe" }}
                ></i>
                <br />
                E-mail
              </a>
            </div>
            <div className="contenedor-a">
              <a
                href="https://www.linkedin.com/in/roc%C3%ADo-martin-953978146/?msgControlName=reply_to_sender&msgConversationId=2-NTU5NDM5ZWUtNzgwYy00N2VjLWJjYmMtOGZiNmZkMTZmMWZiXzAxMw%3D%3D&msgOverlay=true"
                target="_blank"
              >
                <i
                  className="fa-solid fa-sheet-plastic fa-2xl"
                  style={{ color: "#fffbfe" }}
                ></i>
                <br />
                CV
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p
          style={{
            color: "#FF6EC7",
            fontSize: 15,
            paddingBottom: 20,
            marginLeft: 15,
          }}
        >
          Currently located in Buenos Aires
        </p>
      </section>
    </footer>
  );
}
