import { NavLink } from "react-router-dom";

export default function StyledNavbar() {
    return (
        <nav className="navbar">
            <NavLink to='/' style={({isActive})=> {
                return { color: isActive ? 'red' : 'green' }
            }}>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='products'>Products</NavLink>            
        </nav>
    )
}