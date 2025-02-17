import React from 'react'
import './App.css'

import Login from './component/Login'
import FakeApiCall from './section/fakeapi/FakeApiCall'




function App() {



  const [name, setName] = React.useState('Ramesh')


  const [address, setAddress]= React.useState('Swyambu')

  const isAuthorized = true

  if(!isAuthorized){
    console.log('this is isAuthorized')
    return <Login/>
  }

  /////

  return (
    <div className='flex  gap-4 '>
      <FakeApiCall/>
        {/* {
          cardData.map((data, index)=>
            <div key={index}>
              <Card name={data.name} address={data.address} setName={setName}
              imageSrc={data.imageSrc} />
            </div>
          )
        } */}
        {/* <FetchingData/>
      <br />
      <br />
      <br /> */}
    </div>
  )
}






export default App
