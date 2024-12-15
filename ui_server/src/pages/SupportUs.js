import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap'
import ButtonPkg from '../components/BtnPackage';
import { Support } from '../components/List'
import ProgressBar from 'react-bootstrap/ProgressBar'

const SupportUs = ({ user }) => {

    // const Supp = () => {

    // Get's Topics for Support Modals //

    const [charity, setCharity] = useState([]);
    const [contribution, setContribution] = useState([])
    const [thanksMsg, setMsg] = useState('')

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch('http://localhost:4000/get_charity')
            const char = await resp.json()
            console.log(char)
            setCharity(char)
        }
        getData()
    }, [thanksMsg])

    useEffect(() => {
        const getPerson = async () => {
            const resp = await fetch(`http://localhost:4000/get_contribution/${user._id}`)
            const contribute = await resp.json()
            console.log(contribute)
            setContribution(contribute)
        }
        getPerson()
    }, [thanksMsg])

    const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }
    console.log(charity)



    const progressInstances = []
    outer: for (let i = 0; i < charity.length; i++) {
        inner: for (let j = 0; j < contribution.length; j++) {
            console.log(charity[i].title, contribution[j].charity)
            if (charity[i].title === contribution[j].charity) {
                progressInstances.push(
                    <div key={charity[i]._id}>
                        <p>{charity[i].title}</p>
                        <ProgressBar
                            now={contribution[j].amount}
                            label={`${contribution[j].amount}%`}
                        />
                    </div>
                )
                continue outer;
            }
        }
        progressInstances.push(
            <div key={charity[i]._id}>
                <p>{charity[i].title}</p>
                <ProgressBar now={''} label={`${''}%`} />
            </div>
        )
    }


    if (user.email) {

        return (
            <>
                <div>
<body className="bgPicSupport">
                    <h1>Support <span className="rojo">THE ONE</span> Ministries</h1>
                    <div className="supportHeaders pix20">
                        <p className="white">WE GO ONLY BECAUSE YOU GIVE</p>
                        <p className="darkBlue">WE DO ONLY BECAUSE YOU DO</p>
                        <p className="white">WE CAN ONLY BECAUSE YOU CARE</p>
                        <hr />
                    </div>
                    <p className="white">Become a Partner by completing the form below and choosig a support plan for "The One" Ministries.  You will have full access to the website and its features which will hopefully bless you during your on-line experience.</p>
                    <p className="white">We are a non-profit ministry where, after expenses, 100% of our revenue goes in support of the program and people you designate. Please sow into one or more of the organizations listed below as the Holy Spirit Guides you.</p>
                    <p className="white">God Bless</p>
                    <hr />
                    <div className="donateForm textSize">
                        <form id="donater">
                            <div className="form-group white">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control" id="fName"
                                    placeholder="Enter First Name"
                                    required
                                />
                            </div>
                            <div className="form-group white">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control" id="lName"
                                    placeholder="Enter Last Name"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <br />
                    {/* Div for Payment Options */}

                    <hr />
                    <div>
                        <u className="white">How would you like us to use your gift?</u>
                        <br />
                        <div className="charDisplay white">
                            <Support title="Charity" charArr={charity} thanksMsg={thanksMsg} setMsg={setMsg} />
                        </div>
                    </div>
                    <hr />
                    <span className="yellow pix25 progTitle">Progress To Date</span>
                    <br />
                    <br />
                    <div className="progWidth white">
                        {progressInstances}
                    </div>
                    <br />
                    <hr />
                    <button type="submit" id="payBtn">Card Info</button>
                    </body>
                </div>
                <br />
                <div>
                    <ButtonPkg />
                </div>

            </>
        )
    }
}

export default SupportUs

