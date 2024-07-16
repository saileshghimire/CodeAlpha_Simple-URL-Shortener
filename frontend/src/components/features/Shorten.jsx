import { useState } from 'react';
import './shorten.css';

const Shorten = ({shortUrl}) =>{
    return(<div>  
    <div className='Shortened__heading'>
        Your shortened URL
    </div>
    <div className='shorten__url-output'>
        <input type="text" id="shortened-url" value={shortUrl} readOnly/>
        <button onClick={copyToClipboard}>Copy</button>
    </div>
    </div>
    )
}

const copyToClipboard =({shortUrl})=>{
    navigator.clipboard.writeText(shortUrl);
}

export default Shorten;