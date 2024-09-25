import { NavLink } from 'react-router-dom'
import navItems from './NavItems';

function Nav() {

    return (
    <header>
    <nav>
        <ul>
        {navItems.map((item, index) => {
            const { title, url } = item;
            return (
            <li key={index}>
                <NavLink to={url} end className={({ isActive }) =>
                    isActive ? "activenav" : ""
                }>{title}</NavLink>
            </li>
            );
        })}
        </ul>
    </nav>
    </header>
    )
}

export default Nav