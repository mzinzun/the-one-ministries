import React, { useState } from 'react';
import $ from 'jquery';
import ButtonPkg from '../components/BtnPackage'
import Event from '../components/Event';
import { useNavigate } from 'react-router-dom';

function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const OneLessEvent = ({ user }) => {

    // Date and Time //

    const [newEventArray, setNewEventArray] = useState([]);

    const [count, setCount] = useState(0);

    const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

    const navigate = useNavigate();

    let d = new Date();
    let currDay = d.getDay();
    let currMonth = d.getMonth();
    let currDate = d.getDate();
    let currYear = d.getFullYear();
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let today = `${dayNames[currDay]}, ${monthNames[currMonth]} ${currDate}, ${currYear}`;
    $('#today').text(today);

    const submit = e => {

        // Counter to total number of entries //

        e.preventDefault();
        let Story = $('#story').val();
        let Name = $('#userName').val();
        let City = $('#userCity').val();
        const eventArrCopy = deepcopy(newEventArray)
        let countCopy = deepcopy(count)
        eventArrCopy.unshift({ today: today, name: Name, city: City, story: Story });

        $("input.clear").val("");
        $('.totCount').show();
        setCount(countCopy + 1)
        setNewEventArray(eventArrCopy)
    };

    if (user.email) {

        return (
            <div> {/* Parent Div */}
                <body className="bgPicOneLessEvent">
                    <h1>Share Your 'One Less' Success</h1>

                    <p id="today" className="white">{today}</p>
                    <div className="person"></div>
                    <p>Celebrating <span className="less">{count}</span> ONE LESS Events and counting...</p>
                    <div>
                        <form id="share" onSubmit={submit}>
                            <div className="all">
                                <div className=" d-flex row">
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control clear" id="userName" placeholder="Name" required />
                                    </div>
                                    <div className="form-group mx-sm-3 mb-2">
                                        <input type="text" className="form-control clear" id="userCity" placeholder="City" required />
                                    </div>
                                </div> {/* close row  */}
                                <div className="2">
                                    <div className="form-group mx-sm-3 mb-2">
                                        <input type="text" className="form-control clear" id="story" placeholder="Your Story" required />
                                    </div>
                                    <button type="submit" id="event" className="btn btn-secondary mb-2">Submit</button>
                                </div> {/*close 2 */}
                            </div> {/* close all */}
                        </form>
                        <br />
                        <ButtonPkg />

                        <div>
                            <hr></hr>
                            <br />
                            <p className="output">{newEventArray.map((item, index) => {

                                // puts events on the page in newest to latest order //    

                                return <Event {...item} />
                            })}
                            </p>
                        </div>
                    </div>
                </body>
                {/* End Parent Div */}
            </div>
        )
    } else {
        navigate('/')
    }
}

export default OneLessEvent