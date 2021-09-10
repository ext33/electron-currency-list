import {useState, useEffect} from 'react'

function useDetectTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [isDarkTheme, setIsDarkTheme] = useState({
        isDark: theme
    });  
    const mqListener = (e => {
        setIsDarkTheme({isDark: e.matches})
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}

export default useDetectTheme