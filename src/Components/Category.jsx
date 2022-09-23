import React ,{useState,useEffect,useContext} from 'react'
import { ProductApi } from './Store/ProductContextProvider'
export default function Category() {
  var [category,setcategory] = useState([])
  const {getCategory} = useContext(ProductApi)

  async function getAPIData(){
    var response = await getCategory()
    // console.log(response.data);
    setcategory(response.data)
  }   

  useEffect(()=>{
    getAPIData()
  },[])
  return (
    <>
     <div className="container-fluid">
      <div className="row d-flex category">
        {
          category.map((item,index)=>{
            return <div key={index} className="  col-xl-1 ">
            <p className='categoryitem'>{item.name}</p>
          </div>
          })
        }
      </div>
     </div>
    </>
      
  )
}
