import { useCallback, useEffect, useState } from "react";
function App() {
  const [attrib, setAttrib] = useState({
    length: 8,
    numbers: true,
    special: true,
  });

  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false);

  const mycheck = useCallback(() => {
    console.log(copy);
  }, []);

  useEffect(() => {
    function passGenerator() {
      const length = attrib.length || 8; // Default length to 8 if not provided
      const useNumbers = attrib.numbers || false;
      const useSpecialCharacters = attrib.special || false;

      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

      let allChars = lowercaseChars + uppercaseChars;

      if (useNumbers) {
        allChars += numberChars;
      }

      if (useSpecialCharacters) {
        allChars += specialChars;
      }

      let password = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
      }

      return password;
    }

    setPassword(passGenerator());
  }, [attrib]);

  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col items-center pt-3 text-white">
        <p className="font-extrabold text-2xl">Passwrod Generator</p>
        {copy && <p>COpiyes</p>}
        <div className="bg-gray-500 w-fit h-fit rounded-lg mt-3 p-3">
          <div className="flex justify-center">
            <p className="rounded-l-lg p-1 outline-none select-none inline-block bg-white w-1/2 text-black">
              {password}
            </p>
            <input
              type="button"
              value="Copy"
              className="bg-blue-500 hover:bg-blue-700 text-white p-1 text rounded-r-lg"
              onClick={() => {
                navigator.clipboard.writeText(password);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 1000);
              }}
            />
          </div>

          <div className="flex gap-2 mt-2 justify-center">
            <input
              type="range"
              className="w-1/4 accent-pink-300"
              id="slider"
              max={8}
              min={3}
              value={attrib.length}
              onChange={(e) => setAttrib({ ...attrib, length: e.target.value })}
            />
            <label htmlFor="slider">Length({attrib.length})</label>
            <input
              type="checkbox"
              id="num"
              checked={attrib.numbers}
              onChange={(e) =>
                setAttrib({ ...attrib, numbers: e.target.checked })
              }
            />
            <label htmlFor="num">Numbers</label>
            <input
              type="checkbox"
              id="special"
              checked={attrib.special}
              onChange={(e) =>
                setAttrib({ ...attrib, special: e.target.checked })
              }
            />
            <label htmlFor="special">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
