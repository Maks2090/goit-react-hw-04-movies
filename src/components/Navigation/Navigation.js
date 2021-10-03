import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css"

const Navigation = () =>(
    <nav className={css.container}>
        <NavLink exact to="/" className={css.link} activeClassName={css.activeLink}>Home</NavLink>
        
        <NavLink to="/movies" className={css.link} activeClassName={css.activeLink}>Movies</NavLink>
    </nav>
)

export default Navigation