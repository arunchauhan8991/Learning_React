import Todos from './component/Todos'
import AddTodo from './component/AddTodo'
import './App.css'

function App() {
  
  return (
    <>
      <h1 className="text-center text-white text-xl my-4">
        Learn About Redux ToolKit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App
