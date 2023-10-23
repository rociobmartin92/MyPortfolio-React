import { useEffect, useRef } from "react";

export function Navbar() {
  const animation_menu = () => {
    let line1__menu = document.querySelector(".line1__menu");
    let line2__menu = document.querySelector(".line2__menu");
    let line3__menu = document.querySelector(".line3__menu");
    let items_menu = document.querySelector("nav ul");
    let nav = document.querySelector("nav");
    // let nav_white = document.querySelector('body.white nav');

    line1__menu.classList.toggle("activeline1__menu");
    line2__menu.classList.toggle("activeline2__menu");
    line3__menu.classList.toggle("activeline3__menu");
    items_menu.classList.toggle("items_menu");
    nav.classList.toggle("color");
    // nav_white.classList.toggle('color-white')
  };

  const light_theme = () => {
    document.body.classList.toggle("white");
    let btn2 = document.querySelector(".btn2");

    btn2.classList.toggle("active");
  };

  const navRef = useRef(null);

  useEffect(() => {
    const scroll_nav = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navRef.current.classList.add("colorNav");
      } else {
        navRef.current.classList.remove("colorNav");
      }
    };

    window.addEventListener("scroll", scroll_nav);

    return () => {
      window.removeEventListener("scroll", scroll_nav);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="logo">
        <p>My Portfolio</p>
      </div>
      <div className="menu" onClick={animation_menu}>
        <span className="line1__menu"></span>
        <span className="line2__menu"></span>
        <span className="line3__menu"></span>
      </div>
      <ul>
        <li>
          <a href="#Home" onClick={animation_menu}>
            Home
          </a>
        </li>
        <li>
          <a href="#Me" onClick={animation_menu}>
            About
          </a>
        </li>
        <li>
          <a href="#Skills" onClick={animation_menu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#Projects" onClick={animation_menu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={animation_menu}>
            Contact
          </a>{" "}
        </li>

        <button className="btn2" onClick={light_theme}>
          <span>
            <i className="fa-solid fa-sun"></i>
          </span>
          <span>
            <i className="fa-solid fa-moon"></i>
          </span>
        </button>
      </ul>
    </nav>
  );
}
