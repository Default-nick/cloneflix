import React from "react";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 50);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setShow(false);
      });
    };
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      ></img>
      <img
        className="nav-avatar"
        src="https://avatars.githubusercontent.com/u/112864?v=4"
        alt="Defaultnick"
      ></img>
    </div>
  );
}
