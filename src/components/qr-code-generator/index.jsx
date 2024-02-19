import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const inputref = useRef(null)

    const handleGenerateQrCode = () => {
        setQrCode(input)
        setInput('');
    }
   
    useEffect(() => {
        inputref.current.focus()
    }, [handleGenerateQrCode])
  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input onChange={(e) => setInput(e.target.value)} type="text" name='qr-code' placeholder='Enter your value' value={input} ref={inputref}/>
        <button disabled={input && input.trim() !== '' ? false : true } onClick={handleGenerateQrCode}>Generate</button>
        <div>
            <QRCode id='qr-code-value' value={qrCode}  size={400}/>
        </div>
      </div>
    </div>
  )
}

export default QrCodeGenerator
