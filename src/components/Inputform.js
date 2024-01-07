import Inputcolor from "./Inputcolor"
import Inputfield from "./Inputfield"

const Inputform = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
        <Inputfield/>
        <Inputcolor/>
        <button className="bg-indigo-500 max-w-xs ml-auto px-4 py-2 text-white
        rounded-sm mt-4bg-indigo-500 disabled:bg-gray-400">
            Generate QR-Code
        </button>
    </div>
  )
}

export default Inputform