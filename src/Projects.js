export function Projects(){

    const mostrarClick = (descripcion) => {
        const texto = document.querySelectorAll('.descripcion-proyecto');
        texto.forEach(content => {
            content.classList.remove('active');
            if (content.classList.contains(descripcion)){
                content.classList.add('active')
            }
        });
    }
    return(
        <section id="Projects">
    
            <div className="container-proyectos">
                <h1>Proyectos</h1>
                <div className="proyectos">
                    <input type="radio" name="slider" id="item-1"/>
                    <input type="radio" name="slider" id="item-2"/>
                    <input type="radio" name="slider" id="item-3" defaultChecked />
                    <div className="sliders">
                        
                        <label className="slide" htmlFor="item-1" id="selector-1" onClick={() => mostrarClick('Dental-Care')}>
                            <img src={`imagen/DentalCare.png`} alt=""/>
                        </label>
                        <label className="slide" htmlFor="item-2" id="selector-2" onClick={() => mostrarClick('Biblioteca')}>
                            <img src={`imagen/biblioteca.png`} alt=""/>
                        </label>
                        <label className="slide" htmlFor="item-3" id="selector-3" onClick={() => mostrarClick('iMovies')}>
                            <img src={`imagen/iMovies.png`} alt=""/>
                        </label>
                    </div>
                    <div className="descripcion-proyecto Dental-Care">
                        <span><i className="fa-solid fa-check" style={{color: '#00c220'}}></i> Responsive Design</span>
                        <div className="botonesProyectos">
                            <button className="btnProyectos"><a href="https://camimai07.github.io/DentalCare/" target="_blank">Ver Demo</a></button>
                            <button className="btnProyectos"><a href="https://github.com/camimai07/DentalCare" target="_blank">Link al repo</a></button>
                        </div>
                        <p><strong>Dental Care:</strong> Landing-Page de odontología, primer proyecto full-stack. 
                        <br/>
                        <i className="fa-solid fa-wand-magic-sparkles fa-xs" style={{color: '#ff00ea'}}></i> Experiencia obtenida: estructuctura y estilos, creación de formularios y manejo de base de datos.
                        <br/>
                        <i className="fa-solid fa-bookmark fa-2xs" style={{color: '#ff00ea'}}></i> Tecnologías: HTML, CSS, Javascript, Python, Flask, MySQL.
                        </p>
                    </div>
                    <div className="descripcion-proyecto Biblioteca">
                        <span><i className="fa-solid fa-check" style={{color: '#00c220'}}></i> Responsive Design</span>
                        <div className="botonesProyectos">
                            <button className="btnProyectos"><a href="https://github.com/camimai07/Biblioteca" target="_blank">Link al repo</a></button>
                        </div>
                        <p><strong>Biblioteca:</strong> biblioteca virtual de carga y descarga de libros. 
                        <br/>
                        <i className="fa-solid fa-wand-magic-sparkles fa-xs" style={{color: '#ff00ea'}}></i> Experiencia obtenida: manejo de plantillas de bootstrap, sistema de login, CREATE y DELETE.
                        <br/>
                        <i className="fa-solid fa-bookmark fa-2xs" style={{color: '#ff00ea'}}></i> Tecnologías: HTML, Javascript, Python, Flask, MySQL, Bootstrap.
                        </p>
                    </div>
                    <div className="descripcion-proyecto iMovies active">
                        <span><i className="fa-solid fa-check" style={{color: '#00c220'}}></i> Responsive Design</span>
                        <div className="botonesProyectos">
                            <button className="btnProyectos"><a href="https://camimai07.github.io/react-iMovies/" target="_blank">Ver Demo</a></button>
                            <button className="btnProyectos"><a href="https://github.com/camimai07/react-iMovies" target="_blank">Link al repo</a></button>
                        </div>
                        <p><strong>iMovies:</strong> sitio web de películas, visualización de trailers. 
                        <br/>
                        <i className="fa-solid fa-wand-magic-sparkles fa-xs" style={{color: '#ff00ea'}}></i> Experiencia obtenida: creación de sliders con CSS, implementación de Sass con React.
                        <br/>
                        <i className="fa-solid fa-bookmark fa-2xs" style={{color: '#ff00ea'}}></i> Tecnologías: HTML, CSS, Javascript, Sass, React.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    );
}