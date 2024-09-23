import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';
import ProductItem from './ProductItem';

const LatestCollection = () => {

const {products} = useContext(ShopContext);
const [latestProducts, setLatestProducts] = useState([]);

useEffect(()=>{
  setLatestProducts(products.slice(0,10))
},[])


  return (
    <div className="my-10">
      
    <div className="py-8 text-3xl text-center">
      <Tittle text1={'LATEST'} text2={'COLLECTION'}/>
      <p className='w-3/4 m-auto text-sm te:xt-gray-700 md-text-base'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae animi distinctio illum eum voluptatem dicta maxime sapiente commodi.
      </p>
    </div>
    {/* RENDERING PRODUCTS */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 ">
      {
        latestProducts.map((item,index)=>(
          <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          

        ))
      }
    </div>
    </div>
  )
}

export default LatestCollection
// <div className='flex flex-wrap gap-2'> 
//  {products.map((i)=>{
//   return(
//     <div key={i.id}>
//       <h1 >{i.name}</h1>
//       <img src={i.image[0]} className=''/>
//       {/* <p>{i.description}</p> */}
//       <p>{i.price}</p>
//     </div>
//   )
//  })}

// </div>

// for(int i =0; i < n; i++) {
//   print(i);
// }