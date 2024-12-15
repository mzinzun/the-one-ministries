import React, { useState } from 'react';
import ButtonPkg from '../components/BtnPackage';
import $ from 'jquery';

const questions = ({ user }) => {

    const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

    const [newQuestion, setNewQuestion] = useState([]);
    const deepcopy = (obj) => {
        return JSON.parse(JSON.stringify(obj))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let questionArrCopy = deepcopy(newQuestion);
        questionArrCopy.unshift({
            question: document.getElementById('question').value,
            date: new Date().toLocaleString()
        });
        if (questionArrCopy.length > 10) {
            // display last 10 entries
            questionArrCopy.pop()
        }
        $("#question").val("");
        setNewQuestion(questionArrCopy)
    }

    const questionEntries = newQuestion.map((item, idx) => <p key={idx}>{item.question} {item.date}</p>)

    if (user.email) {

        return (
            <div>
                <body className="bgPicQuestions">
                    <h1>Questions and Answers</h1>
                    <div className="white">
                        <p>I love this website and I think it has many useful tools to enhance your Christian walk on a daily basis. However, nothing is perfect so we provide this opportunity for you to ask questions with which you want faith based answers or responses. I promise that I will endeavor to access every resourse available to provide timely, complete and Christ centered answers and also to provide the scriptural references to support the answer. So ask away... Let's see what God says</p>
                    </div>
                    <br />
                    <div className="quesContainer">
                        <form id="myQuestion" className="form-group">
                            <label htmlFor='list'>Enter New Question</label>
                            <input className="form-control" id="question" placeholder="your question here" required ></input>
                            <br />
                            <button type='submit' className="btn btn-warning" id='subBtn' onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <br />
                    <div className="questionBoxes">
                        {newQuestion.map((item, idx) => {
                            return (<div key={idx} className="questionBox qaAnswerScrip">{item.question} <p>{item.date}</p><hr />
                                <p className="pix10 qaAnswerScrip">Answer: (from admin)</p>
                                <hr />
                                <p className="pix10 qaAnswerScrip">Scripture: (from admin)</p>
                            </div>)
                        })}
                    </div>
                    <br />
                    <div className="theQuestion">
                        {questionEntries}
                    </div>
                    <ButtonPkg />
                </body>
            </div>
        )
    }
}

export default questions

