import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <span className="footer-title">Apenas para aprendizado!</span>
      <span className="footer-text">
        Este projeto foi idealizado e criado apenas com o objetivo de aprender e
        aprimorar minhas habilidades.
      </span>
      <span className="footer-text">
        Para mais projetos e informações, acesse meu{" "}
        <a className="footer-link" href="https://github.com/Default-nick">
          Github
        </a>{" "}
        ou veja meu{" "}
        <a className="footer-link" href="https://linkedin.com/in/le-alves/">
          LinkedIn
        </a>
        .
      </span>
      <span className="footer-text">Obrigado!</span>
    </footer>
  );
}
