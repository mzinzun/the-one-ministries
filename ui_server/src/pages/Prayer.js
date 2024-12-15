import React, { useState } from 'react';
import $ from 'jquery';
import ButtonPkg from '../components/BtnPackage'
import { Link } from 'react-router-dom';

const Prayer = ({ user }) => {

    const [newPrayer, setNewPrayer] = useState([]);
    const deepcopy = (obj) => {
        return JSON.parse(JSON.stringify(obj))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const prayer = document.getElementById('prayRequest').value;
        const name = document.getElementById('prayName').value;
        console.log(prayer)
        $(":input").val("");
        setNewPrayer([name, prayer])
    }

    const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

    if (user.email) {

        return (
            <div> {/* Parent Div */}
                <body className="bgPicPrayer">
                    <h1>Prayer Requests</h1>
                    <div className="prayerForm">
                        <form className="prayForm">
                            <div className="form-group mx-sm-3 mb-2">
                                <input type="text" className="form-control clear" id="prayName" placeholder="Name" required />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input type="text" className="form-control clear" id="praySubject" placeholder="Subject or Topic" required />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <input type="text" className="form-control clear" id="prayRequest" placeholder="Your Request" required />
                            </div>
                            <button type="submit" id="prayBtn" className="btn btn-secondary mb-2" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <br />
                    <div className="">

                        <div>
                            {newPrayer.length ?
                                <p className="chartreuse prayerResponse">{newPrayer[0]}, we are praying for <em className="rojo">{newPrayer[1]}</em></p> : null}
                        </div>
                    </div>
                    <br />
                    <p id="note">As God answers your prayer. Please add your story to <Link className="white" to='/onelessevent'>One Less Event.<span className="pix10 rojo"></span></Link> Please also visit our <Link className="white" to='/encourage'>Encourage</Link> page to receive some helpful words regarding your prayer request.</p>
                    <br />
                    <ButtonPkg />
                </body>
            </div>
        )
    }
}

export default Prayer