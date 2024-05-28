import { useContext, useEffect, useState } from "react";
import useUser, { UserContextProvider } from "./context/User";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <>
      <UserContextProvider value={setTheme}>
        <Switch />
        <Dum />
      </UserContextProvider>
    </>
  );
}

function Switch() {
  const setTheme = useUser();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) =>
          e.target.checked ? setTheme("dark") : setTheme("light")
        }
      />
    </>
  );
}
function Dum() {
  return (
    <>
      <p className="bg-white dark:bg-black text-black  dark:text-white">
        sdlkafjlkajflk
      </p>
    </>
  );
}

export default App;
