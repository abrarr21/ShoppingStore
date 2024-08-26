import axios from './Axios'
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext()

function Context( props ) {
    
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

    const getdata = async () => {
        try {
            const {data} = await axios("/products")
            // console.log(data)
            setProducts(data)
        } catch (error) {
            console.error(error)
        }
    }
    console.log(products)

    useEffect(() => {
        getdata();
    }, [])

  return (
    <productContext.Provider value={[products, setProducts]}>
        {props.children}
    </productContext.Provider>
  )
}

export default Context