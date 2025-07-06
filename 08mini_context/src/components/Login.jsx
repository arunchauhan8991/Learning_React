import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"

function Login (){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)
    //setUser is a function that updates the user state in UserContext
    //useContext is a hook that allows you to access the context value
    //UserContext is the context that we created in UserContext.js

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          //what is e.target.value doing here?
          //e.target.value is the value of the input field
          //it is used to update the state of the input field
          placeholder="user"
        />

        <br />

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <br />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
}
export default Login