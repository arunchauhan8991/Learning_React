import Card from './components/card';
import './App.css'

function App() {
let myObj = {
  age:"27",
  username:"Arun"
}

let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test</h1>
      <Card cardHeading = "Physics" description = "1111111111" rating = "5"/>
      <Card cardHeading = "MAthemetics" description = "2222222222" rating = "4.9"/>
    </>
  );
}

export default App
