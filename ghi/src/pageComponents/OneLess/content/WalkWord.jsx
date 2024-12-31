import { useState, useEffect } from 'react';
import $ from 'jquery';
import { Accordion } from 'react-bootstrap';


const WalkWord = () => {
  const deepcopy = (obj) => {
    return JSON.parse(JSON.stringify(obj))
  }

  const [newEntry, setNewEntry] = useState([]);
  const [studies, setStudies] = useState([]);
  const [currentStudy, setCurrentStudy] = useState([]);
  let logCount = 0;

  const getData = async () => {
    const resp = await fetch('http://localhost:4000/get_studies')
    const data = await resp.json()
    setStudies(data)
  }
  useEffect(() => {
    // Get study items from database and puts them on the page //
    getData()
  }, [])

  const submit = event => {

    // Adds user entries into their journal //

    event.preventDefault();
    let entryArrCopy = deepcopy(newEntry);
    entryArrCopy.unshift({
      entry: event.target.elements[0].value,
      date: new Date().toLocaleString()
    });
    $("#myJournal").val("");
    setNewEntry(entryArrCopy)
  }

  const handleTopics = async (e) => {
    e.preventDefault();
    setCurrentStudy([studies[e.target.id]])

  }
  const lis = studies.map((item, idx) => (<li id={idx} key={item._id} className="point" onClick={handleTopics}>{item.title}</li>))


  const studyEl = currentStudy.map(item => (
    <div key={item._id} className="currStudy">
      <h3 className="pix25">{item.title}</h3>
      {item.topics.map((topic, idx) => <p key={idx}>{topic.name}</p>)}
    </div>
  ))

  const journalEntries = newEntry.map((item, idx) => <p key={idx}>{item.entry} {item.date}</p>)

    return (
      <div> {/* Parent Div */}
          <h1>A Walk in the Word<br /><span className="pix20">Daily Devotionals and Bible Study</span></h1>

          {/* Devotional Toggle Actions */}

          <Accordion className="devotions">
            <div>
              <div className="top devoBtn1">
                <Accordion.Toggle className="everyDevoBtn" variant="link" eventKey="1"
                  onClick={() => setCurrentStudy([])}>
                  By Bible
            </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="1">
                <div className="top devoBtn1">
                  <li className="rojo">PLACEHOLDER</li>
                  <li>Old Testament</li>
                  <li>New Testament</li>
                </div>
              </Accordion.Collapse>
            </div>

            <div>
              <div className="top devoBtn2">
                <Accordion.Toggle className="everyDevoBtn" variant="link" eventKey="2"
                  onClick={() => setCurrentStudy([])}>
                  By Theme
            </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="2">
                <div className="top devoBtn2">
                  {lis}
                </div>
              </Accordion.Collapse>
            </div>

            <div>
              <div className="top devoBtn3">
                <Accordion.Toggle className="everyDevoBtn" variant="link" eventKey="3">
                  By Book of the Bible
            </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="3">
                <div className="top devoBtn3">
                  <li className="rojo">PLACEHOLDER</li>
                  <ol>Old Testament
                <li>Genesis</li>
                    <li>Exodus</li>
                  </ol>
                  <ol>New Testament
                <li>Matthew</li>
                    <li>Mark</li>
                  </ol>
                </div>
              </Accordion.Collapse>
            </div>

            <div>
              <div className="top devoBtn4">
                <Accordion.Toggle className="everyDevoBtn" variant="link" eventKey="4">
                  By Character
            </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="4">
                <ul className="top devoBtn4">
                  <li className="rojo">PLACEHOLDER</li>
                  <li>God</li>
                  <li>Jesus</li>
                  <li>Moses</li>
                  <li>Paul</li>
                  <li>Elijah</li>
                  <li>Peter</li>
                </ul>
              </Accordion.Collapse>
            </div>

            <div>
              <div className="top devoBtn5">
                <Accordion.Toggle className="everyDevoBtn" variant="link" eventKey="5">
                  By Prophet
            </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="5">
                <ul className="top devoBtn5">
                  <li className="rojo">PLACEHOLDER</li>
                  <li>Isaiah</li>
                  <li>Jeremiah</li>
                  <li>Ezekiel</li>
                </ul>
              </Accordion.Collapse>
            </div>
          </Accordion>
          <br />
          <div className="white">
            <li>Small Bite: One Bible Verse</li>
            <li>Big Bite: One passage of cohesive scripture</li>
          </div>
          <br /><br />

          <br />
          {studyEl}
          <br />

          <div>
            <form id="entry" onSubmit={submit}>
              <input type="text" className="form-control clear" id="myJournal" placeholder="Notes On My Study" required />
              <br />
              <button type="submit" id="" className="btn btn-secondary mb-2">Submit</button>
            </form>
          </div>

          <div className="myEntry">
            {journalEntries}
          </div>
          {/* End Parent Div */}
      </div>
    )
}

export default WalkWord
