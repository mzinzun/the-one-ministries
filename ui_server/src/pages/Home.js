import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { scriptures } from '../components/Statements';


const Home = ({ user, setUser, login }) => {

  //Carousel of Scriptures on Home Page //
  const navigate = useNavigate();
  const [scripture, setScripture] = useState(0)

  let timer
  useEffect(() => {
    timer = setInterval(() => {
      clearInterval(timer)
      if (scripture + 1 <= scriptures.length - 1) {
        setScripture(scripture + 1)
      } else {
        setScripture(0)
      }
    }, 4000);
  }, [scripture])
  console.log(scriptures)
  console.log(scripture)

  const handleClick = (e) => {
    // Outputs alert for improper Log In //
    e.preventDefault()
    if (user._id) {
      navigate('/personal')
    } else {
      alert("PLEASE SIGN IN AS A NEW USER\nOR LOG IN CORRECTLY\nTO USE THIS FEATURE")
    }
  }

  const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

  // Buttons to enter site //

  let btnArr
  if (user.firstName) {
    btnArr = [
      { title: 'One Less', url: '/oneless', 'li': ['-Becoming a Christian', '-Living as Christian', '-Sharing as Christian'] },
      { title: 'One Door', url: '/onedoor', 'li': ['-One God', '-One Way to Heaven'] },
      { title: 'One Sheep', url: '/onesheep', 'li': ['-Feeling Lost', '-Feeling Forgotten', '-Want to Return to Your Faith'] }
    ]
  } else {
    btnArr = [
      { title: 'One Less', onClick: handleClick, className: 'subCont' },
      { title: 'One Door', onClick: handleClick, className: 'subCont' },
      { title: 'One Sheep', onClick: handleClick, className: 'subCont' }
    ]
  }

  const handleLogout = () => {
    alert("Logout Successful\nThank You for visiting\n" + user.history)
    localStorage.clear()
    setUser(false)
  }

  const buttons = btnArr.map((item, index) => {

    return (<Button data={item} key={index} />)

  })

  return (
    <div> {/* Parent Div */}
      <h1>WELCOME TO <span className="pix40 rojo"><i>THE ONE</i></span> MINISTRIES<br /><span className="trngCtr rojo pix15">✞ THE TRAINING CENTER ✞</span></h1>
      <br />
      <div className="bigMiddle">
        <div className="media">
          <p className="newsStory point">NEWS HEADLINES<br /> <span className="rojo">Stories Impacting You</span><br /><br /><span className="yellow">Rally for Israel in D.C.<br /></span><span className="yellow">U.S. Shows Strong Support<br /><span className="pix10 rojo">(link placeholder)</span></span></p>
        </div>
        <br />
        <div className="formsDiv">
          <div className="memberSign">
            <form id="login" className="form-group signIn" onSubmit={login}>
              <div>
                <label htmlFor="email"><input type="text" className="form-control clear " id="email"
                  placeholder="email address" required></input></label>
              </div>
              <div className="pwd">
                <label htmlFor="password"><input type="password" className="form-control clear" id="password"
                  placeholder="password" required></input></label>
              </div>
              <br />
              <div>
                {user._id ? <button className="startBtn" onClick={handleLogout} >Log out</button> : <button className="startBtn" type="submit" >Log In</button>}
                {user._id ?
                  <button className="startBtn" type="submit" ><Link to={`/user_edit/${user._id}`} ><span className="white">Edit Profile</span></Link></button> : null}
              </div>
            </form>
          </div>
          <hr />
          <div className="newUserSign">
            <form>
              {user._id ? null : <button><Link className="white" to={`/user_edit/0`} >New User</Link></button>}
            </form>
          </div>
        </div>
        <br />
        <div className="mediaThought">
          <p className="newsThought">MY THOUGHT<br /><span className="rojo">Thoughts For This Week</span><br /><br /><span className="yellow">"Why is it that only Jesus and soldiers sign up and <span className="rojo">DIE</span> for what they LOVE?"</span></p>
        </div>
      </div> {/* bigMiddle */}
      <div className="introMsg" id="scripLocale">
        <p className="red" id="scrip">
          {scriptures[scripture]}
        </p>
        <p className="version"><em>-NIV-</em></p>
      </div>
      <br />
      <div className="cont pix30">
        {buttons}
      </div>
      <br />
      <div className="special">
      <p className="white">COMPLETE THE FORM ABOVE AND CHOOSE A DOOR, CLICK IT AND ENTER IT</p>
      <p className="offer"><span className="pix20">👉🏾</span> Click Me to Try Your Free Weekly Site Feature</p>
      </div>
      <hr />
      <hr />
      <div className="fullPage">
        <img className="cloud img-thumbnail" src="./images/praise.jpeg" alt="church" />
        <p>For the best perspective and understanding, please begin by reading <button onClick={handleClick} className="white" to="/personal" ><span className="pix10">🙏🏾Personal🙏🏾</span></button></p>
        <p>Hello and welocme to ONE LESS MINISTRIES. This is a faith based website primarily for baptized believers of any denomination. It is also a great tool for people curious and interested about making a decision to become a follower of Jesus Christ.</p>
        <p>Psalms 42:1-2 says "My soul thirsts for God, for the Living God. When can I go meet with God?" Our purpose is to appropriate and facilitate that meeting EVERYDAY. We want to influence you to be intentional about your Christian walk and to give you the tools to have regular encounters with God and grow your faith. Right now today, survey after survey, show that less than 20% of believers spend time with the Lord on a daily basis. Imagine your lack of success if you don't spend even 20% of your time in any activity trying to improve. Hence, we refer to this site as your <span className="yellow">Christian Training Center</span>. We believe we have many tools you will find useful in making God the top priority that he deserves to be and making your spiritual connections strong and useful.</p>
        <p>Each and every tool and suggestion on this site is supported by scripture and supported by a foundation of the New Covenant of Grace. Again, we encourage you to be conscious and intentional and serious about serving our most gracious Lord by getting to know Him and allowing His will to work His perfect plan for your life. God's grace is awesome and amazing and he wants to share it with you if you will allow it. See below what the site offers, choose to become a member and enjoy its features everyday as often as you like.</p>
        <footer className="pix10 darkBlue">
          <p>One Less, LLC, All Rights Reserved</p>
          <p>Website Sources: The Gospel of Jesus Christ is free. I have borrowed from every source I come across and take no
            credit for the contents of this site except that I am the organizer of the information and it is based on my personal experiences. The Trinity, Bible,
      Various Pastors, and Various Books have blessed the contents of the Webpage.</p>
        </footer>
        <br />
        <Button data={data} />
        <br /><br />
        <p className="rojo pix5"><span className="white pix10">Links Not Active </span>(placeholder div)</p>
        <div className="media d-flex bg-primary justify-content-between">
          <i className="fab fa-facebook-square text-white point"></i>
          <i className="fab fa-instagram text-white point"></i>
          <i className="fab fa-youtube text-white point"></i>
          <i className="fab fa-twitter text-white point"></i>
          <i className="fab fa-tiktok text-white point"></i>
          <i className="btn bg-white btn-link point" id="contact">Contact Us</i>
        </div>
      </div>
      {/*End Parent Div */}
    </div>
  )
}

export default Home