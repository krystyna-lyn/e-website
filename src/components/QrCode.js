import QRCode from "react-qr-code";
import { InputContext } from "../App";
import { useContext } from "react";

const QrCode = () => {
       //context
       const { inputValue } = useContext(InputContext);

       const { url, color } = inputValue;


    return (
        <div className='bg-gray-100 rounded-r-md flex flex-col pt-2'>
            <div>
                <QRCode
                    value={url}
                    size={250}
                    style={{ maxWidth: "100%", width: "100%" }}
                    bgColor={color}
                    fgColor="#fff"
                />
                <button className='bg-indigo-500 px-4 py-1 mt-2 w-full text-white '
                >Download </button>
            </div>

        </div>
    )
}

export default QrCode