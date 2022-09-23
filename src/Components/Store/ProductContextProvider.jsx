import React, { createContext } from 'react'

export const ProductApi = createContext()

async function getProduct(item) {
  var rawdata = await fetch("/product")
  var result = await rawdata.json()
  var d = []
  for (let item of result) {
    var { id, ...x } = item
    d.push({ _id: id, ...x })

  }
  if (result)
    return { result: "Done", data: d }
  else
    return { result: "Fail", message: "Internal Server Error" }
}

async function getCategory(item) {
  var rawdata = await fetch("/category")
  var result = await rawdata.json()
  var d = []
  for (let item of result) {
    var { id, ...x } = item
    d.push({ _id: id, ...x })

  }
  if (result)
    return { result: "Done", data: d }
  else
    return { result: "Fail", message: "Internal Server Error" }
}
export default function ProductContextProvider(props) {
  return <ProductApi.Provider value={{
    getProduct: getProduct,
    getCategory: getCategory
  }}>
    {
      props.children
    }
  </ProductApi.Provider>
}
