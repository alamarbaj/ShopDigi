import React, { useState, useEffect, useContext } from 'react'
import Category from './Category'
import MultipleCard from './MultipleCard'

import { ProductApi } from './Store/ProductContextProvider'
export default function Home() {
  var [product, setproduct] = useState([])
  var {getProduct} = useContext(ProductApi)

  async function getAPIData() {
    var response = await getProduct()
    console.log(response.data);
    setproduct(response.data)
  }

  useEffect(() => {
    getAPIData()
  }, [])
  return (
    <>
    <div className="container-fluid">
    <Category/>
    </div>
      <div className='container-fluid'>
        <div className='row'>
          {
            product.map((item, index) => {
              return <div key={index} className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <MultipleCard
                  _id={item._id}
                  name={item.name}
                  baseprice={item.baseprice}
                  discount={item.discount}
                  finalprice={item.finalprice}
                  description={item.description}
                  pic={item.pic1}
                />
              </div>
            })
          }
        </div>
      </div>
    </>



  )
}
