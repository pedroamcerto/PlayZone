import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return ( 
        <nav>
            <div className="center">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contato</NavLink></li>
                </ul>
            </div>
        </nav>
     );
}

export default Nav;
