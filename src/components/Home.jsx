import React, { useContext } from 'react'
import Navbar from "./Navbar"
import { Link } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading';

function Home() {
    const [products] = useContext(productContext);
    console.log(products)
  return products ? ( 
    <>

        <Navbar />

        <div className="w-[85%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                
                {products.map((item, index) => (
                    <Link 
                    key={index}
                    to={`/details/${item.id}`}
                    className="mr-3 ml-2 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">

                <div 
                    className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110" style={{backgroundImage: `url(${item.image})`}}>
                </div>
    
                <h1>{item.title}</h1>
    
                </Link>
                ))}
        </div> )
    </>
  ) : (<Loading ></Loading>)
};

export default Home