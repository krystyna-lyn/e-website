import { useContext, useEffect, useState } from "react"
import { ChromePicker } from "react-color";
import { InputContext } from "../App";

const Inputcolor = () => {
    const [color, setColor] = useState('#000');
    const [displayColor, setDisplayColor] = useState(false);
    //context
    const { inputValue, setInputvalue } = useContext(InputContext);
    useEffect(()=>{
        setInputvalue({...inputValue, color:color})
    }, [color])


    const handleChange = color => setColor(color.hex)
    return (
        <div>
            <label className="font-semibold text-md">
                Color
            </label>
            <div className="flex item-center gap-2">
                <div
                    onClick={() => setDisplayColor(!displayColor)}
                    style={{ background: color }}
                    className="w-10 h-8 cursor-pointer border-4 ">

                </div>
            </div>
            <span>{color}</span>
            {displayColor && (
                <div className="absolute mt-2">
                    <ChromePicker color={color} onChange={handleChange} />
                </div>
            )
            }
        </div>
    )
}

export default Inputcolor