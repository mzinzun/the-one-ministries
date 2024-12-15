import React, { useState, useEffect, useCallback } from 'react';
import ButtonPkg from '../components/BtnPackage'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Salvation = ({user}) => {

  const [scrips, setScrips] = useState([]);

  const navigate = useNavigate();

  const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

  useEffect(() => {
    const getData = async () => {

      // Get Scriptures from database and Put scriptures on the page //

      const resp = await fetch('http://localhost:4000/get_scriptures')
      const data = await resp.json()
      setScrips(data)
    }
    getData()
  }, [])

  let scripObj = {}
  for (let s of scrips) {
    scripObj[s.quote] = <span data-toggle="tooltip" className="testHover" href="#" title={s.scripture}>{s.quote}</span>
  }

  const handleLogout = (e) => {
    e.preventDefault()
    navigate('/')
  }

  if (user.email) {

  return (
    <>
  <div> {/* Parent Div */} 
    <body className="bgPicSalvation">
  <h1>Plan of Salvation<br></br><span className="pix20">Why Should God Let You Into Heaven?</span></h1>
  <p className="white">1. Do you declare that YOU have sinned and fallen short of the glory of God? ({scripObj['Romans 3:23']})</p>
  <p className="white">2. Do you agree that the wages of YOUR sin is death and that the gift of God is eternal life;
  understanding that wages are worked for and gifts cannot be earned? ({scripObj['Romans 6:23']})</p>
  <p className="white">3. Do you believe that God has the power to gift you salvation?  ({scripObj['Romans 1:16']})</p>
  <p className="white">4. Do you believe that Jesus Christ died for your sins? ({scripObj['1 Corinthians 15:3-5']}, {scripObj['Romans 5:8']})</p>
  <p className="white"> After considering the questions, if you are in agreement then continue...</p>
  <p className="white"><img className="cloud" src="../images/cross.jpeg" alt="church"/>Romans 10:9-13 says: If you declare with
    your mouth, "Jesus is Lord," and believe in your heart that God
    raised him from the dead, you will be saved. For it is with your heart that you believe and are justified,
    and it is with your mouth that you profess your <u className="define point vocab"
      data-toggle="tooltip" data-html="true" title="Faith - 1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)
   2. Believing without seeing.
   3. Taking God at his Word (the bible).
   4. Hope with expectations">faith</u> and are saved.</p>
  <p className="white">Ephesians 2:8-9 says: For it is by <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u>  you have been saved, through <u className="define point vocab"
      data-toggle="tooltip" data-html="true" title="Faith - 1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)
   2. Believing without seeing.
   3. Taking God at his Word (the bible).
   4. Hope with expectations">faith</u> -- and
    this is not from
    yourselves, it is the gift of God -- not by works, so that no one can boast.</p>
  <p className="white">Pray the prayer out loud from Romans 10 sincerely.</p>
  <p className="white"><u className="define point vocab" data-toggle="tooltip" data-html="true" title="Confess - CONFESS YOUR SINS -
   1. To freely agree or acknowledge that you violated God's law by your willful act.
   2. Display real sorrow over your sin.
   3. Ask God to cover your sin with the blood of Jesus and forgive you.
   4. Faithfully believe that God has heard you and will restore you.">Confess</u> that you are a sinner.</p>
  <p className="white">Believe in your heart that Jesus is the son of God.</p>
  <p className="white">Beleive in your heart that Jesus died on the cross for your sins.</p>
  <p className="white">Believe in your heart that God <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Ressurection - RESSURECT / RESSURECTED / RESSURECTION - To bring One back to life from death NEVER to die again. Jesus Christ is the only One ever resurrected. All others brought back to life from death have died again permanently.">ressurected</u> Jesus from the dead.</p>
  <p className="white">Welcome my brother or sister. <em>YOU ARE SAVED. You have just accomplished the first act of
      obedience to the Lord.</em></p>
  <br />
  <p className="white">Read these scriptures to get a more complete picture and understanding of this gift you have just
    received from the Lord your God. I suggest using an NLT version of the Bible for better clarity and understanding.
  </p>
  <ol className="white">
    <li>{scripObj['John 3:16-17']}</li>
    <li>{scripObj['Acts 4:12']}</li>
    <li>{scripObj['Romans 5:17-21']}</li>
    <li>{scripObj['Romans 10:9-13']}</li>
    <li>{scripObj['Ephesians 1:13']}</li>
  </ol>
  <p className="white">Next, go the <Link className="darkBlue testHover" to="/Living">Living</Link> page to discover what your next steps should be after giving your life to Jesus Christ.</p>    
  <ButtonPkg />
  </body>
      {/* End Parent Div */}
    </div>
    </>
  )
  } else {
    navigate('/')
  }
}

export default Salvation
