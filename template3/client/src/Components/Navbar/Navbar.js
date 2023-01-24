import React from 'react'
import image from '../../Assets/logo.png.webp'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsFillBasketFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
    return (
        <>
            <div>
                <nav className='navContainer'>
                    <div>
                        <img src={image} className='nav-img' alt='Nav-img' />
                    </div>
                    <ul className='list'>
                        <li ><Link to={'/'} className='link'> Home</Link></li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                    <div className='div'>
                        <BiSearchAlt2 className='icon' />
                        <BsFillBasketFill className='icon' />
                        <button className='btn'><Link to={'/add'} className='link'>Add new</Link></button>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar