import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import './TrandingProducts.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgDetailsMore } from 'react-icons/cg'
import axios from 'axios';

function TrandingProducts() {
    const [products, setProducts] = useState([])
    const [sortedProducts, setSortedProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setProducts(res.data))
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/products/${id}`)
        const deleteItem = products.filter(product => product._id != id)
        setProducts(deleteItem)
    }
    const [filteredProduct, setFilteredProduct] = useState("")
    const search = (e) => {
        setFilteredProduct(products.filter(product => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase())
        }))
    }
    // const productToRender = filteredProduct.length ? filteredProduct : products
    const handleSort = () => {
        setSortedProducts(products.sort((a, b) => a.name.localeCompare(b.name)))
    }
    return (
        <>
            <section className='trandingProducts'>
                <Container>
                    <Row className='Roww'>
                        <div className='textStart'>
                            <p>Popular Item in the market</p>
                            <h2>Trending <span className='borderBottom'>Product</span></h2>
                        </div>
                        <div>
                            <input placeholder='Search for product' onChange={(e) => setFilteredProduct(e.target.value)} />
                            <button type='submit' onClick={handleSort}>Filter by Name</button>
                        </div>
                    </Row>
                    <div className='cardContainer'>
                        <Row>
                            {

                                products.filter(item => item.name.toLowerCase().includes(filteredProduct.toLowerCase())).map(item => (
                                    <Col sm={3} >
                                        <div className='Card' key={item.id}>
                                            <div className='cardIimg'>
                                                <img src={item.imgUrl} alt="Clock" />
                                                <div className='Hovereffect'>
                                                    <BsSearch className='icon' />
                                                    <AiOutlineDelete className='icon' onClick={() => handleDelete(item._id)} />
                                                    <CgDetailsMore className='icon' />
                                                </div>
                                            </div>
                                            <div className='cardTtext'>
                                                <p>{item.category}</p>
                                                <h4>{item.name}</h4>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }

                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default TrandingProducts