import React, { Fragment } from 'react';
import logo from './logoPrueba.svg';
import menu from './icon-hamburger.svg'


const MyHeader = () => {
    return(
        <Fragment>
            <header className='header'>
                <section className='header_header'>
                    <section className='header_img'>
                    <img className='header_menu-logo' src={logo} alt="logo icon" />
                    <img className='header_menu-mobil' src={menu} alt="menu icon" />
                    </section>
                    <ul className='header_list'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </section>
                <section className='header_textbox'>
                    <h1>INMERSIVE <br/> EXPERIENCES<br/> THAT<br/> DELIVER</h1>
                </section>
            </header>
        </Fragment>
    )
}

export default MyHeader;