import { createContext } from "react";
import Inputform from "./components/Inputform";
import { useState } from "react";

export const InputContext = createContext();

function App() {
  const [inputValue, setInputvalue] = useState({
    url: '',
    color: ''
  })

  const value = {
    inputValue,
    setInputvalue
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-1" >
          <InputContext.Provider value={value}>
            <Inputform />
          </InputContext.Provider>

        </div>

      </div>
    </div>
  );
}

export default App;
