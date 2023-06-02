import logo from "../assets/ComercialbatistaLogo.png";
import "./NavbarStyle.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="containerLogo">
          <img src={logo} alt="logoBatista" className="logo" />
        </div>
        <div className="containerNav">
          <a href="/">Visualizar processos</a>
          <a href="/">Atualizar processos</a>
        </div>
      </div>
    </>
  );
}
