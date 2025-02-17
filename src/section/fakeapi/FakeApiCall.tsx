import { useEffect, useState } from "react"
import { ProductCard } from "../../component/Card"


type productType ={
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating :{
        rate:number,
        count:number
    }
}


const FakeApiCall = () => {
    const [data, setData]= useState<productType[]>([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>setData(data)).catch(error=>console.log(error))
    },[])



  return (
    <div className="grid grid-cols-3">
{
    data.map((item)=>
    <ProductCard category={item.category}    name={item.title} imageSrc={item.image} price={item.price} rating={item.rating.rate} description={item.description} />)
}
    </div>
  )
}

export default FakeApiCall
