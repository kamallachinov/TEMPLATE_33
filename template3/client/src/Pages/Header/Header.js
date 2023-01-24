import React from 'react'
import './Header.scss'
import basketImg from '../../Assets/hero-banner.png.webp'
function Header() {
    return (
        <>
            <header>
                <div className='mainDiv'>
                    <div className='secDiv'>
                        <img src={basketImg} className='img' />
                        <div className='text'>
                            <h4>Shop is fun</h4>
                            <h1>Browse Our Premium Product</h1>
                            <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header