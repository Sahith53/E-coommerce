import React, { useContext, useEffect,useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Tittle'; // Adjust the path according to your project structure

 


const BestSeller = () => {

const {products} = useContext(ShopContext);
const [BestSeller,setBestSeller] = useState([]);

useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestseller));
    setBestSeller(bestProduct.slice(0,9))

},[])

  return (
    <div className='my-10 '>
        <div className="py-8 text-3xl text-center">
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols- md:grid-cols-4 lg:grid-cols-5 gap-y-6 ">
            {
                BestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>

                ))
            }
        </div>
        

    </div>
  )
}

export default BestSeller