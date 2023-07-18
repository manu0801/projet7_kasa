import logo from "../../assets/images/logo/LOGO.svg";
import Navigation from "../../components/nav/Navigation";


function Header() {
    return (
        <header className="header">
            <figure className="header_fig">
                <img className="logo" src={logo} alt="logo de l'agence kasa"/>
            </figure>
            <Navigation className="nav-header"/>
        </header>
    );
};

export default Header;