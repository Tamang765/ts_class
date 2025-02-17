
const Card = ({
  name,
   imageSrc,
   address,
   setName
  }
  :
  {name:string,
    imageSrc:string,
    address:string,
     setName:(name:string)=>void
    }
) => {
  return (
    <div className="border-1 w-fit shadow-2xl">
    <img src={imageSrc} alt="bird_feather" className="w-80 aspect-square" />
    <h2 className="capitalize p-2 font-extrabold ">{name}</h2>
    <h3 className="capitalize p-2 font-extrabold ">{address}</h3>
    <button onClick={()=>setName("Shyam")}>Click</button>
    </div>
  )
}

export default Card


export const ProductCard =({name,imageSrc, price, rating,description, category}:{
  name:string,
  imageSrc:string,
  price:number,
  rating:number,
  description:string,
  category:string
})=>{
  return (
    <div className="border-2 w-fit  text-center  flex flex-col gap-2 shadow-2xl justify-between">
    <div className="px-6 py-8 mx-auto">
      <img src={imageSrc} alt="product_bag" width={200} className="m-auto aspect-square "/>
        <h4 className=" font-semibold text-2xl py-4">{name}</h4>
        <p className="text-base text-gray-400 pb-3 ">
       {category}
        </p>
        <span className="text-3xl">
          $ {price}
        </span>
        <div className="flex  items-center justify-center gap-2">
          <span>Rating</span>
          <span>{rating}</span>
        </div>
    </div>
      <button className="bg-green-500 py-4 text-xl text-white">Add to Cart</button>
    </div>
  )
}
