import { useRef } from 'react';
import { NavLink } from 'react-router-dom'
import navItems from './NavItems';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Nav() {
    const navListRef = useRef<HTMLUListElement>(null);

    const scrollLeft = () => {
        if (navListRef.current) {
            navListRef.current.scrollBy({ left: -navListRef.current.offsetWidth, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (navListRef.current) {
            navListRef.current.scrollBy({ left: navListRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    return (
    <header>
    <button id="left-arrow" className="arrow" onClick={scrollLeft}><FaArrowLeftLong /></button>
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
    <button id="right-arrow" className="arrow" onClick={scrollRight}><FaArrowRightLong /></button>
    </header>
    )
}

export default Nav