import { useState } from 'react'
import Card from './card'
import CardTwo from './cardTwo'

function App() {
  const [name, setName] = useState('');
  return (
    <>
      <div>
        <Card title='card 1' name={name} setName={setName} />
        <CardTwo title='card 2' name={name} setName={setName} />
        {/* <Card title ='card2' name={name} setName={setName} /> */}
        {/* <div>
          <h1>hello</h1>
        </div> */}
        <p> i am inside parent : {name} </p>
      </div>
    </>
  )
}

export default App
