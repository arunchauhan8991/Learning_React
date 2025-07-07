# Theme Switcher

# what we learnt ?

// We have implemented a theme switcher using React Context API and CSS variables.
// The theme switcher allows users to toggle between light and dark themes.
// The theme is stored in local storage so that it persists across page reloads.
// We have also used the useEffect hook to set the initial theme based on the user's preference stored in local storage.
// The theme switcher is implemented in a way that it can be easily extended to support more themes in the future.

# use of context API
// The Context API is used to create a global state for the theme.
// This allows us to access the theme from any component in the application without having to pass it down as props.
// We have created a ThemeContext that provides the current theme and a function to toggle the theme.
// The ThemeProvider component wraps the entire application and provides the theme context to all components.

# Screenshots

![Screenshot](./src/img/1.png)
![Screenshot](./src/img/2.png)