import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';

const LatestCollection = () => {

const {products} = useContext(ShopContext);


  return (
    <div className="my-10">
      
    <div className="py-8 text-3xl text-center">
      <Tittle/>
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