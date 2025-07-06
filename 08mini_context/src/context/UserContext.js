import React from "react";

const UserContext = React.createContext()

export default UserContext;

// This context can be used to provide user data throughout the application
// It can be used to store user information like name, email, etc.

// To use this context, wrap your application with UserContext.Provider
// context is like a global state that can be accessed by any component in the application. 
// It is useful for passing data that needs to be accessed by many components at different levels of the component tree.

