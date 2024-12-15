import { useLocation } from 'react-router-dom';
import Button from '../components/Button.js';

export function BadUrl404() {
    let location = useLocation()

    return (
        // Non-Existing URL //
        <div>
            <h1 className="text-danger pix20">{location.pathname} -  Bad URL, NO SUCH PAGE EXISTS or <br />YOU FORGOT TO LOGIN...again</h1>
            <Button data={{ className: 'newButton', url: "/", title: 'Home', li: [] }} />
            <br />
            
            <div className="urlPic">
                 <p className="urlBaby"><img className="thePic" src="../images/curiousBaby.jpeg" alt="" /></p>
            </div>
            <span className="sizing pix20">👈🏾🤨 YOU DON'T BELONG HERE 😲👉🏾</span>
        </div>
    )
}

export default BadUrl404