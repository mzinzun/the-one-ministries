import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Living = () => {

  const [scrips, setScrips] = useState([]);
  const getData = async () => {
    const resp = await fetch('http://localhost:4000/get_scriptures');
    const data = await resp.json();
    setScrips(data)
  }
  useEffect(() => {

    // Get scriptures from database and put them on the page //
    getData()
  }, [])

let scripObj = {}
  for (let s of scrips) {
    scripObj[s.quote] = <span data-toggle="tooltip" className="testHover" href="#" title={s.scripture}>{s.quote}</span>
  }



  return (
    <>
        <h3>Living a Christian Life</h3>
        <p className="white">CONGRATULATIONS NEW CHRISTIAN. WELCOME TO THE FAMILY</p>
        <p className="white">LOL... I'm sure you are asking "Now What? what Happens Next? How do you become as much like Jesus as possible? What does it mean to be saved?</p>

        <p className="white"><img className="cloud" src="../images/cross.jpeg" alt="church" />Relax and breathe. God is patient and
          knows you are new in the faith. My strong suggestion is that you develop an immediate mindset of discipline and
          simplicity. You likely need to push a reset button on your life and habits; this also requires a mindset of
          toughness because Satan, the enemy, will try to attack in many ways to influence you to return to your old mindset
          and old activities and old friends, all of which may not be ammenable to helping you live a Christian life. Here is a list of many of the things I have found to be necessary for living as a new Christian.</p>
        <ol className="white">
            <li>Read the word EVERYDAY (see <Link className="darkBlue testHover" to="/walkWord">A Walk in the Word</Link> for suggestions), start
              with Romans 12 which gives explicit instructions to all believers on how to live in the faith. I suggest that you
              next read the Gospels in this order (John, Matthew, Mark, Luke) followed by the books of Romans and Hebrews to
              learn about the righteousness of Jesus and the life of Jesus and the new covenant of <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace.</u> Discover who Jesus is, what he did for you, and what he wants to do with your life.</li>
            <p className="white">Understand that Jesus died for three(3) reasons</p>
            <ul className="white">
              <li>To be an example to man on how to live as a servant ({scripObj['John 13:5']})</li>
              <li>To reveal God to man ({scripObj['John 14:9-10']})</li>
              <li>To trade places with man ({scripObj['2 Corinthians 5:21']})</li>
            </ul><br />
            <li>Connect with a church. NO EXCEPTIONS. You will fail if you try to live a Christian life alone.</li>
            <li>Talk to a Christian friend daily if possible or use this website to share how God has impacted your today or
              yesterday. Just share your experiences, hopes, expepcations. <Link className="darkBlue testHover" to="/personal" >My Personal Testimony</Link>, <Link className=" darkBlue testHover" to="/oneliners"> One Liners for
                Meditation</Link>, <Link className="darkBlue testHover" to="/oneLessEvent">One Less Event</Link>, <Link className="darkBlue testHover"
                to="/confessSins">Confess my Sins</Link>, <Link className="darkBlue testHover" to="/prayer">Prayer Requests</Link>, <Link className="darkBlue testHover" to="/chatRoom">Chat Room<span className="pix10 rojo">(placeholder)</span></Link> are all good pages for new Christians to visit regularly.</li>
            <li>Pray and Pray again. Talk to God about literally everything that crosses your mind. Though he already knows your
              thoughts, he still wants to hear from you. This also helps establish regular communication with God and he will
              speak through the HOLY SPIRIT, the CHURCH, the BIBLE, CIRCUMSTANCES AND CONFIRMATION of OTHERS (anything else is
              not of God) and begin to guide your thoughts and behavior. Pray also for others in your life. Pray for those who
              support you and for those you want to support you.</li>
            <li>Join spiritual recovery groups if you need to overcome addictions: drugs, alcohol, sex, homosexuality,
              depression, anger, etc.</li>
            <li>Reduce or eliminate contact and/or interaction with anyone, including family, who is not in support of your
              Christian journey. This is the toughness part I mentioned earlier. No relationship should be prioritized above
              your relationship with Jesus Christ. The point bears repeating, in that associating with people who exhibit bad
              behavior will ALWAYS corrupt your good morals.</li>
          </ol>
          <p className="white">There is a song that says, "What a wonderful change in my life has been wrought since Jesus Christ."
            I think the words are beautiful in that you can check yourself regularly to see if your heart has really changed.
            Better stated by Jesus in {scripObj['John 3:5-7']} where he says that you must be "born again". The way you are cannot serve or
            please God and being "born again" means God gives you a new heart, a new soul, a new way of thinking, and his Holy
            Spirit. Please realize this desire to change should be relatively instant as you truly accept God's love and gift of
            <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Salvation - The Gift of Eternal Life after Death through:
          1. Atonement - the covering of your sins.
          2. Reconciliation - bringing you together mutually with your creator.
          3. Redemption - payment for you for the purpose of serving God."> salvation</u>. Some of the changes should look
            like this:</p>
          <ol className="white">I Desire Change so ...
            <li>I love Jesus</li>
            <li>I love the bible</li>
            <li>I love other Christians</li>
            <li>I love my enemies</li>
            <li> I love the souls of all people</li>
            <li>I love the pure life</li>
            <li>I love to talk to God.</li>
          </ol>
          <p className="white">If you don't love all these things, NO WORRIES, but now you know better how to set your thinking and
            how to pray more specifically for God to change your heart.</p>
          <p className="white">Never Forget these Truths regarding Your Purpose:</p>
          <p className="white">1. You are created for a purpose<br />2. Your purpose is connected to God's purpose. You are
            created-selected-gifted to fulfil God's purpose not yours.<br /> 3. Your purpose is to be centered in church. a. every
            christian is to be involved in ministry ({scripObj['Ephesians 4:11-12']}) b. Therefore, your gifts (Rom 12) + passion ({scripObj['Philippians 2:13']}) + needs
            (God's, others, community, church) = YOUR MINISTRY.</p>
          <p className="white">In personal testimony, know that I got lost for too long a period of time because I trusted in my own
            way above God's way and paid huge penalties. Please learn from my mistakes. God's word leads to the
            only path of success. You, and all new Christians, are like the Israelites just on the edge of entering the promised
            land. God explained it to them in said this to them in {scripObj['Joshua 1:8-9']}. Now knowledge of God's law is a good thing and never leads you wrong as you set your moral compass for good behavior; however, the really  cool thing  is since Jesus ascended to Heaven, Jesus promised and delivered his  gift of  <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u> under the New Covenant. {scripObj['Galatians 2:20']} and {scripObj['Colossians 3:1-3']} says that you, as a believer, now have Christ living inside of you and the Holy Spirit, who, with your permission, will guide you in every way necessary to stay on the right path. Congratulations to you on making the best decision of your life.</p>
        </>
  )
}

export default Living
