import { useState, useEffect } from 'react';
import $ from 'jquery';
import { Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

const Morals = ({ user, setUser }) => {
  const [scrips, setScrips] = useState([]);

  const navigate = useNavigate();

  const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

  useEffect(() => {

    // get scriptures from the database and put them on the page //

    const getData = async () => {
      const resp = await fetch('http://localhost:4000/get_scriptures')
      const data = await resp.json()
      setScrips(data)
    }
    getData()
  }, [])

  const submit = async e => {
    e.preventDefault();
    let newItem = $("#list").val();
    if (newItem === "") {
      return true
    }
    let obj = { moral: newItem }
    const resp = await fetch(`http://localhost:4000/add_moral/${user._id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
    const data = await resp.json()
    setUser(data)
    $(":input").val("");
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    const resp = await fetch(`http://localhost:4000/delete_moral/${user._id}/${e.target.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json'
      }
    });
    const data = await resp.json()
    setUser(data)
  }

  let scripObj = {}
  for (let s of scrips) {
    scripObj[s.quote] = <span data-toggle="tooltip" className="testHover" href="#" title={s.scripture}>{s.quote}</span>
  }

  let moralArr = []
  if (user.morals) {
    moralArr = user.morals.map((item, index) => <li key={index}>{item}<button id={index} className="moralInvBtn" onClick={handleDelete}>Delete</button></li>)
  }



    return (

      <>
          <h3>Moral Inventory</h3>
          <p className="white"><img className="cloud tall" src="../images/cross.jpeg" alt="church" />I firmly believe that all believers
            should check themselves regularly against their own personal
            Moral Inventory. As the author of this site, I am sharing mine (in no order of importance) as a sample of what I do
        monthly. I speak to myself in the affirmative, reminding myself who I am in Christ. I am not perfect, as God already knows, and where I fall short, I ask God for help to improve and grow in my spiritual walk. I invite you to  develop your own Moral Inventory below and check yourself against it regularly and trust God to move you forward. Bear in mind that yours, just like mine can and should change as the Holy Spirit guides your thoughts and actions.</p>
          <Accordion>
            <Accordion.Toggle eventKey="0" >
              <p className="pink">My List<br /><span className="pix10 yellow">open/close</span></p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div>
                <br />
                <ol className="white">
                  <li> Because Jesus said to Love one another ({scripObj['1 John 19:34-35']}), I do not persecute others.</li>
                  <li> Because Jesus said I am salt and light and to make disciples ({scripObj['Matthew 5:13-16']}, {scripObj['Matthew 28:19']}), I share my faith and demonstrate goodness and kindness.</li>
                  <li> Because God is slow to anger ({scripObj['Exodus 34:6']}), I am patient in all things when necessary.</li>
                  <li> Because God forgave me ({scripObj['Colossians 3:13']}), I forgive others quickly.</li>
                  <li> Because God made me and my wife one flesh ({scripObj['Ephesians 5:31']}, {scripObj['Matthew 19:6']}, {scripObj['Genesis 2:24']}), I do not lust for other women or desire divorce</li>
                  <li> Because God gave me mercy and grace ({scripObj['Hebrews 4:16']}), I look to offer mercy and grace to others</li>
                  <li> Because Jesus forgave his enemies ({scripObj['Luke 23:34']}), I forgive those who offend me</li>
                  <li> Because God loves a cheerful giver ({scripObj['Proverbs 28:27']}, {scripObj['2 Corinthians 9:7']}), I give willingly to those in need</li>
                  <li> Because God wants to hear from me regularly ({scripObj['1 Thessalonians 5:16-18']}), I pray regularly</li>
                  <li> Because God hates evil ({scripObj['Romams 12:9']}), I love and fear the Lord ({scripObj['Psalms 97:10']}), ({scripObj['Proverbs 8:13']}) and hate evil</li>
                  <li> Because God said no weapon formed against me will prosper ({scripObj['Isaiah 54:17']}, {scripObj['Romans 8:31,37']}), I pray earnestly for my enemies</li>
                  <li> Because Jesus never worried ({scripObj['Phillipians 4:6']}), I am not anxious about situations</li>
                  <li> Because God tells me not to think more highly of myself than I ought to ({scripObj['Romans 12:3']}), I do not judge others</li>
                  <li> Because God uses me to do  his work, ({scripObj['2 Timothy 2:15']}), I study the word of God to know the truth</li>
                  <li>Because the Holy Spirit guides me ({scripObj['Galatians 5:25']}), I demonstrate it fruits: Love/Peace/Joy/Kindness/Goodness/Gentleness/Faith/Paitence/Self-Control + Humility (added just for me by me) </li>
                  <li> Because Jesus is ALIVE in me ({scripObj['Galatians 2:20']}), I do not have a signature sin</li>
                </ol>
                <p className="white">One additional thought is that you also need to consider the "gray" areas where scripture does not
                  specify a "Thou shall ... or Thou shall not ...". Things of this nature might include dancing, responsible drinking,
                  consuming certain foods, attending LGBTQ+ events, etc. I have wrestled with this concept because this is where most
                of us live on a daily basis as we face similar choices at home, work, and with family. {scripObj['1 Corinthians 6:12']} addresses this perfectly because often times there are not "yes or no - right or wrong" answers as each situation is its own entity so therefore I need to consider what is beneficial. So now, I ask myself these questions and it
                  really helps me to simplify my position and be at peace with my choices and decisions. Feel free to use my process
                or develop your own. The important thing is that you become intentional about your choices rather than involve yourself in things for the wrong reasons.</p>
                <ol className="white">Questions for my gray areas:
              <li>Greg, Do you have doubts about doing this activity?</li>
                  <li>Greg, Can you thank God for the experience of what you just did?</li>
                  <li>Greg, Will you be embarrassed if you are being evaluated for making this choice?</li>
                  <li>Greg, Will your choice help or hurt other people?</li>
                </ol>
              </div>
            </Accordion.Collapse>
          </Accordion>
          <br />
          <p className="white">Often times my environment, timing, participants help guide my choices also. For example, I would not
            have a drink with a recovering alcoholic. I would not dance loosely in ways that might tempt others but would
            absolutely enjoy an appropriate dance with my wife. Make sense ??? Continue to pray when facing similar choices and
        let God, through the Holy Spirit, Guide your thinking.</p>

          <p className="chartreuse pix10">** NOTE: I suggest that you involve yourself with the things on this page privately
            between you and God as these are personal to you specifically. It's certainly fine to share as I have shared mine
            with you as an example or for accountability with a trusted companion but you need to be free to be totally honest
        and sincere with your thoughts, feelings and inputs.</p>

          <div className="inventory">
            <form className="form-group white moralForm" onSubmit={submit}>
              <label className="pink pix20" htmlFor='list'><span className="yellow">{user.firstName}'s</span> MORAL INVENTORY</label>
              <input className="form-control param newUserSign" id="list" placeholder="Your List Here" required></input>
              <br />
              <button type='submit' className='button' id='submitBtn'>Submit</button><br />
            </form>
            <br />

            <ol className="listing white">{moralArr}</ol>
          </div>
          {/* End Parent Div */}
      </>
    )

}

export default Morals