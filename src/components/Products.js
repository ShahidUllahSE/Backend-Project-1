import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/api/products")

        .then(res => {

            setProducts(res.data)

        })
        .catch(err => {
            console.log(err)
        })
    },[products])
  return (
    <div>
      
        {products.length>0 && products.map(prod => {
            return(
                <tr>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                </tr>
            )
        })}

    </div>
  )
}

export default Products
