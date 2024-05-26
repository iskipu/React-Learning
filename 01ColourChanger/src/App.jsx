import { useState } from "react";

const colourKeys = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  pink: "bg-pink-500",
  yellow: "bg-yellow-500",
};

function App() {
  const [colour, setColour] = useState("bg-blue-500");
  return (
    <>
      <div className={`w-screen h-screen ${colour} overflow-auto `}>
        <div className="m-auto bg-white rounded-3xl px-2 flex gap-3 w-fit fixed bottom-2 left-0 right-0">
          {Object.entries(colourKeys).map(([key, value]) => (
            <button
              key={key}
              className={`rounded-xl ${value} text-sm font-bold p-1 m-1`}
              onClick={() => setColour(value)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
