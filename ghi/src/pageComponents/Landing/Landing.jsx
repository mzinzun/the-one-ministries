import { useEffect, useState } from 'react';
import './Landing.css'
import scriptArray from './scriptArray.json';
import Footer from '../../components/Footer'
function Landing() {
    const [scripture, setScripture] = useState(0);
    useEffect(() => {
        console.log("scripts", scriptArray)
        //use timeinterval to change scripture every 5 seconds
        setInterval(() => {
            setScripture(Math.floor(Math.random() * scriptArray.length))
        }, 5000)
    }, [])
    return (
        <>
            <main className="landing">
                <h1 className="landing-title">Landing</h1>
                <section className='my-thoughts'>
                    <h2>Thoughts for the Week</h2>
                </section>
                <section className='script'>
                    <h2>{scriptArray[scripture].scripture}</h2>
                    <p>{scriptArray[scripture].quote}</p>
                </section>
                <section className='one-less'>
                    <h2>One Less Section</h2>
                </section>
                <section className='welcome'>
                    <h2>welocme to The ONE LESS MINISTRIES</h2>
                </section>
            </main>
            <Footer />

        </>

    )
}

export default Landing
