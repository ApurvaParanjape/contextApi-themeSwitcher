import { createContext, useContext } from "react";

//creating a context
export const ThemeContext = createContext({
    mode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

//creating a provider to wrap children elements
export const ThemeProvider = ThemeContext.Provider

//crating a function to use the context
export default function useTheme(){
    return useContext(ThemeContext)
}