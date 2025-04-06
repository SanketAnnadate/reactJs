import './App.css'
import Card from './Components/Card'

function App() {

  // let myObj = {
  //   name: "hitesh",
  //   age: 21
  // }

  // let newArr = [1,2,3,4]

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>Chai or code</h1>
        <Card username="sanket" btnText="clickMe"/>
        <Card username="Annadate" btnText="clickHer"/>
    </>
  )
}

export default App
