import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css'

function Qrcode() {

  const [inputText, setInputText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');

 
  const generateQRCode = () => {
    setQRCodeText(inputText);
  }

  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div className="Qrcode">
      <h1 className='gqr'>Generate and download a QR code image </h1>
      <div className="qr-input">
        <input
        name='name'
        className='form__field'
          type="text"
          placeholder="Enter input"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        
        <input
        className='button but'
          type="button"
          value="Generate"
          onClick={generateQRCode}
        />
      </div>
      <QRCode
        id="qrCodeEl"
        size={150}
        value={qrCodeText}
      />
      <br />
      <input
      
        type="button"
        className="download-btn button"
        value="Download"
        onClick={downloadQRCode}
      />
    </div>
  );
}

export default Qrcode;