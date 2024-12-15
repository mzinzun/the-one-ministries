import React, { useState, useEffect } from 'react';
import Button from '../components/Button.js';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

const Personal = ({ user }) => {

  const [scrips, setScrips] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    // Get Scriptures from database and Put scriptures on the page //

    const getData = async () => {
      const resp = await fetch('http://localhost:4000/get_scriptures');
      const data = await resp.json()
      setScrips(data)
    }
    getData()
  }, [])

  let scripObj = {}
  for (let s of scrips) {
    scripObj[s.quote] = <span data-toggle="tooltip" className="testHover" href="#" title={s.scripture}>{s.quote}</span>
  }

  if (user.email) {

    return (
      <div>
        <h3>My Personal Testimony</h3>
        <div className="vidScreen">
          <div id="vidBox">
            <div className="topPersonal">
              <span id="myPic">👨🏿‍💻</span>
              <p className="white start">There should be a button that starts an audio play of my testimony and in a perfect world
                  the text should scroll in sync with the audio and in an even more perfect world each word would highlight as
                it it read.</p>
              <span className="fa fa-play fa-f0ea"> pause</span>
            </div>
            <br />
            <div id="target" style={{ "overflow": "scroll" }}>
              <p>Just like the story in {scripObj['Luke 12:16-21']}, I was the "rich fool" described in the parable who wanted to expand his storage space rather than share his blessings with others including God. Then to add insult to injury, I, after the  Lord told  me  not to, I  counted my  successes and took credit rather than crediting the Lord for using me to do his will. Man, is it possible to offend our loving, gracious God more than that all the while believing that I was in good standing with the Father. Praise the Lord for his mercy in that I did not get what I deserved.</p>
              <li>That was then, Now I am being called, justified and glorified ({scripObj['Romans 8:30']})</li>
              <li>That was then, Now I am the righteousness of God ({scripObj['2 Corinthians 5:21']})</li>
              <li>That was then, Now I no longer conform to the world and culture, my mind is transformed ({scripObj['Romans 12:2']})</li>
              <li>That was then, Now I have died to self and Christ literally lives in me ({scripObj['Galatians 2:20']})</li>
              <br />
              <p>If you have a few moments you are sincerely invited to JUMP IN WITH ME, DIVE IN WITH ME; This is my story...I started this website because I wanted to share my experiences with you personally. Though I am speaking through a computer, I am really speaking to you as if you and I were in a shared space alone having a conversation. All the pages and tools in this site are here to show you and allow you to learn the things I have learned and experience the things I have experienced which hopefully will allow you to have a closer walk with God. I log on everyday and do my devotionals (<Link className="white" to="/walkWord">A Walk in the Word</Link>), pray and confess my sins (<Link className="white" to="/confessSins">Confess my Sins</Link>), receive encouragement (<Link className="white" to="/encourage">Encourage Me</Link>), and get meditation topics (<Link className="white" to="/oneliners">One Liners for Meditation<span className="pix10 rojo"></span></Link>), plus any number of things I may need at a particular time. </p>
              <br />
              <p>Romans Chapter 5 does an amazing job of explaining how every human being ever born was born with a sin virus which created a sin debt to God. As such, we are all guilty and subject to eternal, fatal judgement ({scripObj['Romans 6:23']} / {scripObj['James 1:15']}) and desperately in need of a savior. That all sounds horrible but the good news is that is the end of the bad news. The real GOOD NEWS is that Jesus sacrificed his perfect, blameless life, forgave all my sins and trangressions and through that process, he overcame death to be <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Resurrection - RESURRECT / RESURRECTED / RESURRECTION To bring One back to life from death NEVER to die again. Jesus Christ is the only One ever resurrected. All others brought back to life from death have died again permanently.">resurrected</u> releasing the gift of <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Salvation - The Gift of Eternal Life after Death through 1. Atonement - the covering of your sins. 2. Reconciliation - bringing you together mutually with your creator. 3. Redemption - payment for you for the purpose of serving God.">salvation</u> and the gift of <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u> which got me adopted into sonship ({scripObj['Romans 8:15-17']} / {scripObj['Galatians 4:5-7']} / {scripObj['Ephesians 1:4-6']}) and made me an heir, pardoned from my fate, making me an adopted son to God and an adopted brother to Jesus. (Whew!!! Mouthful, but all of that needed to be said...) Feel free to skip this next part as it is a bit long but I truly encourage you to read it at least once as it is my complete and entire motivation for creating this website. This is very personal to me but also important, I think, if you too want a personal and meaningful relationship with Jesus Christ under  <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u>.</p>
              <p>Always remember, I believe strongly that God will do for you exactly or beyond what he has done for me.</p>

              <Accordion>
                <Accordion.Toggle className="pix10 yellow" eventKey="1">
                  More/Less
              </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <p className="completeTestimonial">Testimonial: These are my words from October 2021.<br />Hello my friend,<br />I am writing you from a California State Prison. I would like to share my experience from a few weeks ago...<br /><br />I was alone in a cell in mandatory covid 19 protocols for 10 days as I had just arrived to the prison to begin serving a two year sentence. I had nothing but a borrowed bible and time so I decided to revisist the four Gospels and do a compare/contrast of their message about the life of Jesus. I only had an NLT version so it read more like a novel, which was fine. Before I continue, let me state emphatically that I have no formal training in theology and have never been formally educated in matters of scripture. I became a Christian at a very young age and went to church most of my life but again I am a J.A.C. (LOL: Just A Christian) speaking from my heart as influenced by the Holy Spirit.<br />Anyhow, I was particularly moved as I read about the resurrection. Everyone rallies around Resurrection Sunday (Easter) as they should when God bound Satan and conquered death with our Lord and Savior Jesus Christ rising from the dead, never to die again, in all glory and righteousness.  Thus, fulfilling old testament prophecy and releasing us from the covenant of the laws of Moses and making a new covenant with us of God's laws being placed on our minds and hearts (Heb 10:16-18) and with salvation and grace as its foundation. That said, I was, however, drawn to the Friday and the events leading up to Friday. I was moved to tears over the course of two days thinking of the sacrifices that Jesus made in order for me and you to have eternal life and access to the kingdom of Heaven. Jesus came from Heaven, walked the earth as both 100% God and 100% man; with man's feelings and emotions and he endured temptations and persecutions as he preached the gospel and performed miracles in the Lord's name, finally ending in his vicioius and terrible crucifixion. I had to pause here because it forced me to look inwardly and reflect.<br />Here is a brief summary of what the Gospels revealed of the events of that Passover week. Jesus entered the city on the back of a borrowed donkey regailed by all the people. Days later after the Last Supper he was arrested and taken to Annas, then Caiphas for torture and interrogation. Then he was taken to Pilate and Herod and back to Pilate again where they mocked him, slapped him, spit on him, stripped him naked and beat him with a barbed whip and ultimately nailed him to a cross and killed him. I counted sixteen(16) different ways in which Jesus was harrassed and tortured constantly over that period to the point where scripture says his body was unrecognizeable. I'm still shaking as I visualize and write these words. Scripture also says that He could have asked God to send a legion of angels to come from Heaven and protect Him and it would have been done. Imagine His control, restraint and commitment to His Mission just because He loves us.<br />Friday, He was forced to carry his cross to exhaustion to Golgotha (Skull Mountain, Cavary) where at 9am the Roman soldiers nailed his hands and feet to the cross and stood it upright, not with regular nails but with thick, long spikes all the while being jeered and mocked for three hours. Finally, at noon, after all that suffering,  God placed the sins of the world upon him, past-present-future; they were yours, mine, and everyone who ever lived and will live from the beginning  of time to eternity on that cross. God now looking down at His only son Jesus, turned His back on Him because He cannot look at sin. Scripture speaks of the day turning black beyond comprehension representing Jesus' sin load and God's separation.  This lasted three hours until 3pm when God said "enough, paid in full" and Jesus cried out to the Lord and died. My Gosh, we serve an amazing God.  Every sin you and I have and ever will commit is paid for because of this act of Love providing we repent and ask forgiveness. Jesus, even today, is in Heaven seated to the right of God, pleading and asking God not to render judgement for sin and reminding Him that He already paid for the sin and telling God that he was here, He knows what it feels like to be tempted, to fall and to give into sin. He asks God to be patient because we are worth His love, mercy, and grace. That is who God is.<br />I went to sleep. Then, in the early morning hours, I know the Holy Spirit woke me up and said plain and simple, "Why don't you intentionally commit ONE LESS sin today. I pictured Jesus on the cross, with just my sins alone and me removing one from his load. Then I thought if I could only do this everyday, how much more can I serve the kingdom. If I can actively, consciously, intentionally think and pray before I react sinfully to my environment or temptations, I can focus on doing God's will and in the process have ONE LESS repentance, ONE LESS mistake, ONE LESS wrong-doing. From there, I enrolled in a web development class and THE ONE Ministries was inspired by Holy Spirit and developed while I was incarcerated. I offer you access to this website and offer you the same tools I use today to improve my Christian walk and closeness with the Father.</p>
                </Accordion.Collapse>
              </Accordion>
            </div> {/* overflow-scroll */}
          </div> {/*  End Video Box  */}
        </div> {/* End Vidio Screen */}
        <br />
        <Button data={data} />
        <Button data={{ className: 'newButton', url: "/", title: 'Home', li: [] }} />

        {/* End Parent Div */}
      </div>
    )
  } else {
    navigate('/')
  }
}

export default Personal




