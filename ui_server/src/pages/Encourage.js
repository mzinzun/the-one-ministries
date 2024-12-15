import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonPkg from '../components/BtnPackage'
import { List } from '../components/List'

const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

const Encourage = () => {

  // Get's Topics for encourage Modals //

  const [encourage, setEncourage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch('http://localhost:4000/get_encourage')
      const encour = await resp.json()
      setEncourage(encour)
    }
    getData()
  }, [])
  return (

    <div> {/* Parent Div */}
      <body className="bgPicEncourage">
        <h1>Encourage Me<br /><br /></h1>
        <p className="yellow" id="encourage">I'm Struggling, Please ENCOURAGE me...</p>
        <p className="white"><img className="cloud" src="../images/cross.jpeg" alt="church" /></p>
        <p className="white">You find yourself at this page because something in your 'present day', something in your 'right now' has you discouraged which is one of the three tactics used by the enemy (discourage, distract, deceive). Assuming true, it's not easy to look toward your tomorrow let alone your next hour. But, be encouraged, as I need you to think about THE past with God and then YOUR past with God and look forward to your exciting future with God.</p>
        <p className="white">The word <i
          className="purple">REMEMBER</i> is used 281 times in the bible for a reason and it's because God wants you to never
    forget what he has done for his people throughout and he wants to do the same for you because of his love and <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u></p>
        <ol className="darkBlue pix10">
        <p>** Need to pick the best 5 or 6 from the list below **</p>
          <ul><span className="purple">Remember:</span> God created the Heavens and the Earth. (Genesis 1)</ul>
          <ul><span className="purple">Remember:</span> God parted the Red Sea and set his people free. (Exodus 14)</ul>
          <ul><span className="purple">Remember:</span> God was with Daniel in the Lions Den. (Daniel 5)</ul>
          <ul><span className="purple">Remember:</span> God gave his only son Jesus to die so that you may have eternal life. (John 3)</ul>
          <ul><span className="purple">Remember:</span> God made a new covenant of Grace that covers you and all your needs. (Hebrews 8)</ul>
          <ul><span className="purple">Remember:</span> Something from your PAST with God.</ul>
        </ol>
        <ol className="darkBlue pix10">
          <ul><span className="purple">Remember:</span> God's promises, like the rainbow after the Flood, are eternal and unbroken. (Life of Noah)</ul>
          <ul><span className="purple">Remember:</span> Jesus made a safe place for us at the cross, but you must accept His gift of Hope. (Life of Noah)</ul>
          <ul><span className="purple">Remember:</span> God is revealed best during the storms of life. It is there you will understand how is working in your situation. (Life of Job)</ul>
          <ul><span className="purple">Remember:</span> God is in the business of restoration to include your homes, families, friendships and your life. (Life of Job)</ul>
          <ul><span className="purple">Remember:</span> God cares about restoration and he will bring healing into your life. (Life of Jacob)</ul>
          <ul><span className="purple">Remember:</span> God can always use your situation to accomplish his good purposes. (Life of Jacob)</ul>
          <ul><span className="purple">Remember:</span> You don't have to be perfect in order to be a person after God's own heart. (Life of David)</ul>
          <ul><span className="purple">Remember:</span> When you are cut off and in a lonely place, it is then the enemy will tempt you to seek refuge and comfort in things other than God. (Life of David)</ul>
        </ol>
        <p className="white"><u className="define point vocab" data-toggle="tooltip" data-html="true" title="MEDITATE 1. Reading 2. Believing 3. Absorbing (Thinking over and over again) 4. Applying 5. Obeying">Meditate</u> on these truths in your struggle and be encouraged that God will never leave you or
      forsake you in your time of need.</p>
        <p className="white">If you feel a greater need for help please click <Link className="purple" to="/hotline">Hotline<span className="pix10 rojo">(Placeholder)</span></Link> to
      get to an actual person for deeper intervention.</p>

        <h5 className="darkBlue">TOPICS - <span className="purple">Remember:</span> YOU ARE NOT ALONE</h5>
        <List title="Topics" liArr={encourage} />
        <div className="white">
          If you want to pray more specifically, go to <Link className="purple" to="/prayer" >Prayer Request</Link> and we would love to pray with you right now.
      </div>
        <br />
        <ButtonPkg />
      </body>
    </div>
  )
}

export default Encourage


