import React, { useState } from 'react'

function Create() {

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const addProductHandler = (e) => {
        e.preventDefault();
        const product = {
            title, image, price, category, description
        }
        // console.log(product)
    }

  return (
    <form onSubmit={addProductHandler} className='flex flex-col p-[5%] items-center w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>
        <input 
            type="url" 
            placeholder='Image Ling' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
            onChange={(e) => setImage(e.target.value)} 
            value={image} 
        />
        
        <input 
            type="text" 
            placeholder='title' 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
        />

        <div className='w-1/2 flex justify-between'>
            <input 
                type="text" 
                placeholder='Category' 
                className='text-1xl bg-zinc-200 rounded p-3 w-[47%] mb-3' 
                onChange={(e) => setCategory(e.target.value)} 
                value={category} 
            />

            <input 
                type="text" 
                placeholder='Price' 
                className='text-1xl bg-zinc-200 rounded p-3 w-[47%] mb-3' 
                onChange={(e) => setPrice(e.target.value)} 
                value={price} 
            />
        </div>

        <textarea 
            className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3'
            placeholder='Enter Product Description here..'
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
        >    
        </textarea>

        <button className="py-3 px-5 border rounded border-blue-300 text-blue-600">Add New Product</button>
    </form>
  )
}

export default Create