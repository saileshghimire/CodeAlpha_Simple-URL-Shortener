
import { useState } from 'react';
import './feature.css';
import axios from 'axios';
import Shorten from './Shorten';

const handleSubmit = async (e) =>{
    const respone = await axios.post('http://localhost:5000/api/v1/creatingurl',
        {
            originalUrl: Url
        }
    );
    setShortUrl(respone.data.shortUrl);
}

const Feature = ()=>{
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    return(
        <div className='feature'>
            {shortUrl ?(
                <Shorten shortUrl={shortUrl} />
            ):(
                <div>
                <div className="feature__heading">Paste the URL to be shortened</div>
                <div className="feature__url-input">
                    <input type="text" value={url} placeholder='Enter the links here'
                    onChange={(e)=>{
                        setUrl(e.target.value)
                    }} />
                    <button onClick={handleSubmit}>Shorten</button>
                </div>
                </div>
            )}
           
        </div>
    )
}


export default Feature;