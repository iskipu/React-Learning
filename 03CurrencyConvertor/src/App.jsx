import { useEffect, useState } from "react";
import cinfo from "./hooks";

function App() {
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [amnt, setAmnt] = useState(0);
  const [calc, setCalc] = useState(0);
  const data = cinfo(from);
  useEffect(() => {
    setCalc(amnt * data[to] || 0);
  }, [from, to, data, amnt]);
  return (
    <>
      <div className="h-screen bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white p-4 flex justify-center items-center h-full">
          <div className="w-1/2 h-1/2 border-2 border-white bg-black opacity-75 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-3 w-full h-full">
              <p></p>
              <div className="bg-white w-4/5 h-1/4 rounded-2xl -mb-5 p-3">
                <p className="text-black">From</p>
                <div className="flex justify-between">
                  <input
                    type="number"
                    className="text-black outline-none w-1/6"
                    value={amnt}
                    onChange={(e) => setAmnt(Number(e.target.value))}
                  />
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option>Choose Currency</option>
                    {Object.keys(data).map((cr) => (
                      <option key={cr}>{cr}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="bg-blue-300 text-black hover:bg-blue-700 rounded-md p-2 z-10"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
              >
                Swap
              </button>
              <div className="bg-white w-4/5 h-1/4 rounded-2xl -mt-4 p-3">
                <p className="text-black">To</p>
                <div className="flex justify-between">
                  <p className="text-black">{calc}</p>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={to}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option>Choose Currency</option>
                    {Object.keys(data).map((cr) => (
                      <option key={cr}>{cr}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
