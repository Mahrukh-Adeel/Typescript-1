import ThemeProvider from "./ThemeProvider";
import useTheme from "./useTheme";

const Home=() =>{
  const {theme, toggleTheme} = useTheme();
  return(
  <>
    <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-blue-700'}`}>
      <p className={`${theme==='light'? 'underline': 'shadow-lg'}`}>This is the text</p>
      <button onClick={toggleTheme} className={`m-3 mt-2 p-2 ${theme==='light'? 'bg-blue-200':'bg-slate-800 border-2 border-white'}`}>
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
      </button>
    </div>
  </>
  );
}

function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App
