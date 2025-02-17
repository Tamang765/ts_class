import { useEffect, useState } from "react"
import FetchFromJson from "./FetchFromJson"
const FetchingData = () => {
    // const data =fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

    const [num,setNum] = useState(0)


    // useEffect(()=>{
    //     alert('hello sir num is changed ')
    //     add(num)
    // },[])


    //first case
    // useEffect(() => {
    //   console.log('this is useEffect')
    // })



    //second update case
    useEffect(() => {
      console.log('this is 2nd case')
    },[])
  // },[num])



    const [x, setX]= useState(0)
    const [Y, setY]= useState(0)


    function axis(e:MouseEvent){
      setX(e.clientX)
      setY(e.clientY)
      console.log(e.clientX, e.clientY)
    }


    // useEffect(() => {
    //   window.addEventListener('mousemove', axis)
    //   return ()=>{
    //     window.removeEventListener('mousemove', axis)
    //   }
    // }, [])



    function add(num:number){
        console.log('clicked')
        setNum(num+1)
    }


    function inputExample(e:any){
    console.log(e.target.value)
    }





  return (
    <div>
      {x} -
      {Y}
      <button onClick={()=>add(num)}>click</button>
      <input type="text" onChange={(e)=>inputExample(e)} className="border-2 hello" />
      <input type="text" onChange={(e)=>inputExample(e)} className="border-2 asd" />
      <FetchFromJson/>
    </div>
  )
}

export default FetchingData
