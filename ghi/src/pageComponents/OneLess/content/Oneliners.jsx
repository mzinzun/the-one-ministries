import { useState, useEffect } from 'react';
import { loadStatement, oneLiners } from './Statements';

const Oneliners = () => {

    const sticky = { className: 'sticky-top sticky', onClick: () => window.refresh() }

    const [showOne, setShowOne] = useState(false)
    const [showAll, setShowAll] = useState(false)

    const handleClickOne = (e) => {
        e.preventDefault();
        const oneline = loadStatement()
        console.log(oneline)
        setShowOne(oneline)
    }

    const handleClickAll = (e) => {
        e.preventDefault();
        const randNumber = `The Entire List of Meditation Topics:`;
        setShowAll(!showAll)
    }

    return (
        <div>
            <div className="sticky-top">
                <p className="pix10 sticky"><u>Back to Top</u></p>
            </div>
            <h3>One Liners for the Day</h3>
            <br />
            <p></p>
            <div className="shootPics">
                <img className="cloud img-thumbnail" src="../images/cross.jpeg" alt="church"></img><img className="cloud img-thumbnail" src="../images/cross.jpeg" alt="church"></img><img className="cloud img-thumbnail" src="../images/cross.jpeg" alt="church"></img>
            </div>
            <p className="rndm pix20">Psalms 19 asks that the meditation of our heart be pleasing in the sight of the Lord. Pick a One Liner or "Post-it-Note" for your <u className="define point vocab" data-toggle="tooltip" data-html="true" title="MEDITATE 1. Reading 2. Believing 3. Absorbing (Thinking over and over again) 4. Applying 5. Obeying">Meditation</u> Thoughts today.</p>
            <p className="white">There are over 150 to choose from. Click until one speaks to your spirit.</p>
            <p className="rojo pix15">NOTE: PLACEHOLDER, this feature works but is not yet fully functional.</p>
            <button className="rand" id="click" onClick={handleClickOne} >Click for One</button>
            <button className="rand" id="click" onClick={handleClickAll} >Click for All</button>
            <p></p>
            <p className={`showOneText white ${showOne ? "frame" : ""}`}>{showOne ? showOne : null}</p>
            {showAll ? oneLiners.map((item, idx) => <p key={idx} className="purple">{idx + 1} {item}</p>) : null}
        </div>
    )
}

export default Oneliners;
