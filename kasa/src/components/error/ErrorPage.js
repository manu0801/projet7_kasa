import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

function NoPage() {
    return (
        
        <div className="errorContainer">
            <p className="errorContainer_Number">404</p>
            <p className="errorContainer_Text">
                oups, La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" className="errorContainer_Link">
                Retourner à la page d'accueil
            </NavLink>
        </div>
        
    );
}

export default NoPage;