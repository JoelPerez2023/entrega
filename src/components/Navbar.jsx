import React from 'react'
import CardWidget from './CardWidget'
import styled from 'styled-components'




function Navbar() {
    

    return (
        <header>
        <NavContainer>
            <span>JoeSports</span>
            <h2>NavBar</h2>
            <div href="/">Inicio</div>
            <div href="/">Marcas</div>
            <div href="/">Indumentaria</div>
            <div href="/">Zapatillas</div>
            <div href="/">Registrate</div>
            <div href="/">Acceder</div>
            <ul className='nav_list'>
                <li>
                    <a className="nav__lin" href="#">Item 1</a>
                </li>
                <li>
                    <a className="nav__lin" href="#">Item 2</a>
                </li>
                <li>
                    <a className="nav__lin" href="#">Item 3</a>
                </li>
                <li>
                    <a className="nav__lin" href="#">Item 4</a>
                </li>
                <li>
                    <a className="nav__lin" href="#"> <CardWidget/> </a>
                </li>
            </ul>
        </NavContainer>
            
        </header>
    )
}

export default Navbar

const NavContainer = styled.nav`
  
`


