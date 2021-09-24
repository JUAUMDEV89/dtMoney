import { createContext, useState, useContext } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import {  } from '../styles/styled';

interface ThemeContextProps{
    
    toggleTheme(): void; 
}

const ThemeContext = createContext<ThemeContextProps[]>([]);

export function ThemesProvider({ children }){

   const [theme, setTheme] = useState(light);

   const toggleTheme = ()=>{
      setTheme(theme.title === 'light' ? dark : light);
   }

   return(
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
          { children }
       </ThemeContext.Provider>
   )
} 

export function useTheme(){
    const {  }  =useContext(ThemeContext);
} 