import ReactDOM from 'react-dom/client';
import './SASS/main.scss';
import { Navbar }  from './Navbar';
import { Home }  from './Home';
import { Me }  from './Me';
import { Projects }  from './Projects';
import { Skills }  from './Skills';
import { Contact }  from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <div className="div">
      <section id='Total'>
          <Home/>
          <Me/>
          <section id='Skills'>
            <Skills/>
          </section>
          <Projects/>
          <Contact/>
      </section>
    </div>
  </>
);


