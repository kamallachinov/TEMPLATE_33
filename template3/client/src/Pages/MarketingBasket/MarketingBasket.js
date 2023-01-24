import React from 'react'
import './MarketingBasket.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function MarketingBasket() {
    return (
        <>
            <section className='section'>
                <div className='mainDiv'>
                    <Row className='roww'>
                        <Col sm={12}>
                            <div className='texts'>
                                <h3>Up To 50% Off</h3>
                                <h4>Winter Sale</h4>
                                <p>Him she'd let them sixth saw light</p>
                                <button className='btn'>Shop now</button>
                            </div>
                        </Col>
                        <Col sm={0}></Col>
                    </Row>
                </div>


            </section>

        </>
    )
}

export default MarketingBasket