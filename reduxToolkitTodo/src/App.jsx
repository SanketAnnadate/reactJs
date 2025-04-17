import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  return (
    <>
     <h1 className='text'>Redux toolkit</h1>
     <AddTodos/>
     <Todos/>
    </>
  )
}

export default App
