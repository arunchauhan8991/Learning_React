import { TodoProvider } from './Contexts';
import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]) // todos is an array....

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
    //adding new item in the already existing todos array by using prev value
  }

  const updatedTodo = (id,todo ) => {            // id of todos array item that requires update and content that is updating is todo
    setTodos((prev) => prev.map((item) => (item.id === id ? todo: prevTodo )))
    //prev is complete array previously in state  through which we are looping to find id of element that require update
    //item is single item in prev array 
    //if we find similar id then update todo content at that element and if not then nothing (item same as itwas)

  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? {...item, completed: !item.completed} : item)))
    //use spread operator ...item to get all the values(id, todo, completed) of item whose id is matched
    //and then reversed the existing value of completed key only using ! 
  }



  useEffect( () => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}
                className="w-full"
                >
                  <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
