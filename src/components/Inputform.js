import Inputcolor from "./Inputcolor"
import Inputfield from "./Inputfield"
import React, { useContext, useState } from "react";
import QRCode from 'qrcode';
import { InputContext } from "../App";

const Inputform = () => {
  const { inputValue } = useContext(InputContext);
  const { url, color } = inputValue;

  const [qr, setQr] = useState('');

  const GenerateQRCode = (qrColor) => {
    QRCode.toDataURL(url, {
      width: 200,
      margin: 2,
      color: {
        dark: qrColor || '#e2e2e2',
        light: '#EEEEEEFF'
      }
    }, (err, url) => {
      if (err) return console.error(err);

      console.log(url);
      setQr(url);
    });
  }
  return (
    <div className="md:grid md:grid-cols-3 gap-3 p-6">
      <div className="col-span-2">
        <Inputfield />
        <Inputcolor />

        <button className="bg-indigo-500 max-w-xs mt-6 px-4 py-2 text-white
          rounded-sm mt-4bg-indigo-500 disabled:bg-gray-400"
          onClick={() => GenerateQRCode(color)}>
          Generate QR Code
        </button>
      </div>

      <div className="bg-gray-100 rounded-r-md flex flex-col pt-2 ml-auto">
        <div className="text-gray-500 text-center m-auto px-10"
        >Your QR CODE HERE
        </div>
        {qr &&
          <>
            <img src={qr} alt="QR Code" />
            <a
              className="bg-indigo-500 max-w-xs mt-6 px-4 py-2 text-white
              rounded-sm mt-4bg-indigo-500 disabled:bg-gray-400 text-center"

              href={qr} download="qrcode.png">Download</a>
          </>
        }
      </div>

    </div>
  )
}

export default Inputform