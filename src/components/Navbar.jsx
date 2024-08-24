import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { Link } from 'react-router-dom';

function Navbar() {

  const [products] = useContext(productContext)
  
  let unique_category = 
        products && products.reduce((accumulator, currentValue) => [...accumulator, currentValue.category], []);

  unique_category = [...new Set(unique_category)] 
  
  // console.log(unique_category)

  const randomColor = () => {
    return `rgba(${(Math.random()*255)}, ${(Math.random()*255)}, ${(Math.random()*255)}, 0.4)`
  }


  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">

      <a className="py-3 px-5 border rounded border-blue-300 text-blue-600" href="/create">Add New Product</a>
      <hr className="my-3 w-[80%]" />

      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>

      <div className=" w-[80%]">
        {unique_category.map((category, index) => (
          <Link 
            key={index}
            to={`/?category=${category}`} className="flex items-center mb-3">
            <span style={{backgroundColor: randomColor( )}} className="rounded-full mr-2 w-[15px] h-[15px]"></span>{" "} 
            {category} 
        </Link>))}

      </div>
    </nav>
  )
}

export default Navbar