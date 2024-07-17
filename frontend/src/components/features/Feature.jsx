
import { useState } from 'react';
import './feature.css';
import axios from 'axios';
import Shorten from './Shorten';



const Feature = ()=>{
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async () =>{
        console.log("called");
        console.log(url);
        const respone = await axios.post('http://localhost:3000/api/v1/creatingurl',
            {
            originalUrl: url
            }
        );
        setShortUrl(respone.data.shortUrl);
    }

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