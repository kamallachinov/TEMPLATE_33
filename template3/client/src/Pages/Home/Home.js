import React from 'react'
import Header from '../Header/Header'
import MarketingBasket from '../MarketingBasket/MarketingBasket'
import TrandingProducts from '../TrandingProducts/TrandingProducts'

function Home() {
    return (
        <>
            <Header />
            <TrandingProducts />
            <MarketingBasket />
        </>
    )
}

export default Home