import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/Axios'
import Loading from './Loading'
import { productContext } from '../utils/Context'

function Details() {
  const [products, setProducts] = useContext(productContext)
  const [product, setProduct] = useState(null)
  const {id} = useParams()

  // const getsingleProduct = async () => {
  //   try {
  //     const {data} = await axios.get(`/products/${id}`)
  //     // console.log(id)
  //     setProduct(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    if(!product){
      setProduct(products.filter(p => p.id == id)[0])
    }
    // getsingleProducts()
  }, []) 
  
 return product ? (
  <div className='w-[70%] h-full flex gap-5 items-center m-auto py-[10%]'>
      <img
          className='object-contain h-[80%] w-[40%]' 
          src={product.image} 
          alt="" />

      <div className='content w-[50%]'>
          <h1 className='text-semibold text-4xl'>{product.title}</h1>
          <h3 className='text-zinc-400 my-5'>{product.category}</h3>
          <h2 className='text-purple-600 mb-3'>{product.price}</h2>
          <p className='mb-[5%]'>{product.description}</p>

          <Link className='mr-5 py-2 px-5 border rounded border-blue-400 text-blue-600' >Edit</Link>
          <Link className='mr-5 py-2 px-5 border rounded border-red-400 text-red-600' >Delete</Link>
      </div>

      
  </div>
) : (<Loading></Loading>)
}

export default Details