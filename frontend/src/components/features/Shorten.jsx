import { useState } from 'react';
import './shorten.css';

const Shorten = ({shortUrl}) =>{

    const copyToClipboard =()=>{
        navigator.clipboard.writeText(shortUrl);
    }

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



export default Shorten;