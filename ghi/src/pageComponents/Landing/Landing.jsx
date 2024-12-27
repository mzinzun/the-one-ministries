import { useEffect, useState } from 'react';
import './Landing.css'
import scriptArray from './scriptArray.json';
import Welcome from '../../components/Welcome/'
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
                <section className='landing-section'>
                    <div className='row news-thoughts-div'>
                        <section className='col-3 '>
                            <h2>News Story Headlines</h2>
                        </section>
                        <section className='col-3 my-thoughts'>
                            <h2>Thoughts for the Week</h2>
                        </section>
                    </div>

                    <section className='script'>
                        <h2>{scriptArray[scripture].scripture}</h2>
                        <p>{scriptArray[scripture].quote}</p>
                    </section>
                    <section className='one-less-link'>
                        <h2>One Less Section</h2>
                    </section>
                </section>
                <Welcome />
            </main>
            <Footer />

        </>

    )
}

export default Landing
