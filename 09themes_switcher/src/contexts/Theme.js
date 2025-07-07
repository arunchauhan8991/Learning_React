import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {}, // we only write name of function functionality is written in App.jsx
  lightTheme: () => {}, // we only write name of function functionality is written in App.jsx
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

// explaination of code:
// 1. createContext is used to create a context object that can be used to pass data through the component tree without having to pass props down manually at every level.
// 2. useContext is a hook that allows you to access the context value in a functional component.
// 3. ThemeContext is the context object that is created using createContext.   
// 4. ThemeProvider is the provider component that will be used to wrap the component tree and provide the context value to all the components in the tree.
// 5. useTheme is a custom hook that allows you to access the context value in a functional component. It uses useContext to get the context value from ThemeContext.

// now we can use just UseTheme() in any component to get the themeMode, darkTheme and lightTheme functions
// and we dont need to import ThemeContext and ThemeProvider directly in the component
// this is a better way to use context in react as it makes the code cleaner and easier