import React from 'react';
import Button from '../components/Button.js';

const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }


const OneDoor = () => {

    return (
        <div>
            <h1 className="heading">One Door to Heaven<br /><span className="rojo pix15">PLACEHOLDER PAGE</span></h1>
            <p className="rojo">One Door Page - PLACEHOLDER PAGE ONLY !!!</p>
            <p>Let's be honest. There are many, many doors of Religion. They include but are not limited to: Christian, Muslim,
    Mormon, Buddha, Hindu, etc.</p>
            <p>Let's also be honest in that Jesus' door is the only way to Heaven. (Faith, Ressurection, etc)</p>
            <ol> Facts and Truth that Prove there is One Door to Heaven
    <li>Historical Facts</li>
                <li>Archealogical Facts</li>
                <li>Your Choices</li>
                <li>Christian Guided Path</li>
            </ol>
            <hr />
            <p>Luke 12: Knowledge of Weather vs Knowledge of Messiah. Over 300 prophecies about the coming of Jesus in OT.</p>
            <p>Rom 1:20 - No excuses</p>
            <hr />
            <ol>Warnings that there is a right way. One way
    <li>From Events</li>
                <ul>Titanic: Shortcuts with Course</ul>
                <ul>Titan: Shortcuts on Design</ul>
                <li>From Church</li>
                <li>From Family</li>
                <li>From Community</li>
            </ol>
            <p>Resist the World. Resist Culture. Pursue Christianity.</p>
            <p>Imitation Triangle. From you => Mentor or Teacher => Jesus. Don't stop at Mentor or Teacher</p>
            <p>I Cor 15:1-4 defines the gospel which is the door in a sense. I Cor 15: 12-19 is the faith that opens the door</p>
            <p>Gal 1:8-9 is the result of other doors</p>
            <p>Eph 4:4-6 There is ONE!!!</p>

            <Button data={data} />
            <Button data={{ className: 'newButton', url: "/", title: 'Home', li: [] }} />

        </div>

    )
}

export default OneDoor;
