import { useEffect, useState } from 'react';
import './Landing.css'
import scriptArray from './scriptArray.json';
import Welcome from '../../components/Welcome/'
import Footer from '../../components/Footer'
import { Link } from 'react-router';
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
                    <div className='news-thoughts-div'>
                        <section className='landing-news border'>
                            <Link to='/news'>
                                <h2>News Story Headlines</h2>
                            </Link>

                        </section>
                        <section className='landing-thoughts border'>
                            <h2>Thoughts for the Week</h2>
                        </section>
                    </div>

                    <section className='script'>
                        <h1 className=''>{scriptArray[scripture]}</h1>
                    </section>
                    <section className='one-less-link'>
                        <Link to='/one-less' className='ol-link'>
                        <h2 className='text-gray'>One Less Lessons</h2>
                        </Link>
                    </section>
                </section>
                <Welcome />
            </main>
            <Footer />

        </>

    )
}

export default Landing
