import { useContext } from "react"
import { InputContext } from "../App"

const Inputfield = () => {
  const { inputValue, setInputvalue } = useContext(InputContext);
  //console.log(inputValue)

  const handleChange = (e) => setInputvalue({...inputValue, url: e.target.value})

  return (
    <div>
      <label className="font-semibold text-md">
        Your URL
        </label>
        <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
        placeholder="https//example.com"
        value={inputValue.url}
        onChange={handleChange}
        />
        
    </div>
  )
}

export default Inputfield