import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;

// This component provides the UserContext to its children
// It uses the useState hook to manage the user state   
// UserContextProvider is a higher-order component that wraps the application and provides the user context to all components in the application
// It can be used to store user information like name, email, etc.

// what is a higher-order component?
// A higher-order component (HOC) is a function that takes a component and returns a new component.
// HOCs are used to add functionality to a component without modifying the original component.

//what is user & setUser in above code?
// user is the state variable that holds the user information
// setUser is the function that updates the user state