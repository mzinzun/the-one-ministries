import React, { useState, useEffect, useCallback } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import ButtonPkg from '../components/BtnPackage';
import { updateHistory } from '../javascript/functions';


const OneLess = ({user, setUser}) => {

    const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

    $(".layout").hide();
    const accordian = (e) => {
        $(".layout", $(e.target.parentElement.parentElement)).slideToggle("slow");
    }

   // Link to Navigate all Tags //
    const tagsArr1 = [
        { title: 'Meet God', url: '/introduce' },
        { title: 'Salvation', url: '/salvation' },
        { title: 'Living', url: '/living' }
    ];
    const tagsArr2 = [
        { title: 'Morals', url: '/moral' },
        { title: 'Confess my Sins', url: '/confessSins' },
        { title: 'Eternally Secure', url: '/eternallySecure' },
        { title: 'Oneliners for Meditation (Words of Wisdom)', url: '/oneliners'},
        { title: 'A Walk in the  Word (Bible Study)', url: '/walkword' }
    ];
    const tagsArr3 = [
        { title: 'Encourage Me', url: '/encourage' },
        { title: 'One Less Event', url: '/onelessevent' },
        { title: 'Prayer Requests', url: '/prayer'},
        { title: 'Questions and Answers (Ask the Bible)', url: '/questions'},
        { title: 'Support Us', url: '/support' }
    ]

    const tagPages1 = tagsArr1.map((item, index) => {
        return (<Link to={item.url} key={index} onClick={() => updateHistory(user, setUser, item.url)} ><p className="layout" ><span>{item.title}</span></p></Link>)
    });
    const tagPages2 = tagsArr2.map((item, index) => {
        return (<Link to={item.url} key={index} onClick={() => updateHistory(user, setUser, item.url)} ><p className="layout" ><span>{item.title}</span></p></Link>)
    });
    const tagPages3 = tagsArr3.map((item, index) => {
        return (<Link to={item.url} key={index} onClick={() => updateHistory(user, setUser, item.url)} ><p className="layout" ><span>{item.title}</span></p></Link>)
    })

    /////////////////////// End Tags Navigation ///////////////////////////////////
    const less = () => {

        // Initial Member Data // 

        useEffect(() => {
            const getData = async () => {
                setMember({ firstName: "Greg", lastName: "Marshall" })
            }
            getData()
        }, [])
    }

    return (
        <div> {/* Start Parent Div */}
            <div> 
                <div className="jumbotron">
                    <h1 className="one"><span className="pix25">ONE LESS MINISTRY</span><br /><span className="trngCtr rojo pix15">✞ THE TRAINING CENTER ✞</span></h1>
                    <h4 className="heading">Living Under Grace</h4>
                    <img className="pic align-self-center" src="../images/bible.jpeg" />
                    <br />
                </div> {/* end Middle */}
            </div> {/* End Jmbotron */}

            {/* Start Tabs */}
            <div className="container main d-flex justify-content-between">
                <div id="subContainer1 layout" onClick={accordian} >
                    <span class="clr"><u id="title1">Becoming CHRISTIANS</u></span>
                    {tagPages1}
                </div>
                <div id="subContainer2 layout" onClick={accordian} >
                <span class="clr"><u id="title2">Living as CHRISTIANS</u></span>
                    {tagPages2}
                </div>
                <div id="subContainer3 layout" onClick={accordian} >
                <span class="clr"><u id="title3">Sharing with CHRISTIANS</u></span>
                    {tagPages3}
                </div>
            </div>
            <ButtonPkg />

        </div > /* End Parent Div */
    )
}

export default OneLess;