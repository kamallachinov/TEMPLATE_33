import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Add.scss'
function Add() {
  const [imgUrl, setImgUrl] = useState("")
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <>
      <Formik
        initialValues={{ imgUrl: '', category: '', name: '', price: '' }}
        validationSchema={Yup.object({
          imgUrl: Yup.string()
            .min(10, 'Must be 10 characters or less')
            .required('Required'),
          category: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          name: Yup.string().required('Required'),
          price: Yup.number()
        })}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          const myObj = {
            imgUrl: values.imgUrl,
            category: values.category,
            name: values.name,
            price: values.price
          }
          resetForm()
          axios.post("http://localhost:5000/products", myObj)
            .then(res => console.log(res))
        }}
      >
        {
          values => (
            <div className='formContainer'>
              <Form className='Form'>
                <label htmlFor="imgUrl">imgUrl</label>
                <Field name="imgUrl" type="text" className='input' placeholder='add some imgUrl'/>
                <ErrorMessage name="imgUrl" />

                <label htmlFor="category">category</label>
                <Field name="category" type="text" className='input' placeholder='add some category' />
                <ErrorMessage name="category" />

                <label htmlFor="name">name</label>
                <Field name="name" type="text" className='input' placeholder='add some name' />
                <ErrorMessage name="name" />

                <label htmlFor="price">Price</label>
                <Field name="price" type="number" className='input' placeholder='add some Price'/>
                <ErrorMessage name="price" />

                <button type="submit" className='btn'>Submit</button>
              </Form>
            </div>

          )
        }
      </Formik>


    </>
  )
}

export default Add