import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {

  return (
      //we can also use UserContext.Provider value ={{ user, setUser }} instead of UserContextProvider (directly here)
     <UserContextProvider>  
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

