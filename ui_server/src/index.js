import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import OneLess from './pages/Less.js';
import Moral from './pages/Moral.js';
import ConfessSins from './pages/ConfessSins.js';
import WalkWord from './pages/WalkWord.js';
import Salvation from './pages/Salvation.js';
import Encourage from './pages/Encourage.js';
import Living from './pages/Living.js';
import OneLessEvent from './pages/OneLessEvent.js';
import UserEdit from './pages/UserEdit.js';
import OneDoor from './pages/Door.js';
import OneSheep from './pages/Sheep.js';
import Personal from './pages/Personal.js';
import BadUrl from './pages/BadUrl';
import Oneliners from './pages/Oneliners.js';
import EternallySecure from './pages/EternallySecure.js'
import Questions from './pages/Questions.js'
import SupportUs from './pages/SupportUs.js'
import Prayer from './pages/Prayer.js'
import Introduce from './pages/Introduce'

const App = () => {
    const [user, setUser] = useState(false)
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if (storedUser && storedUser !== 'null') {
            setUser(JSON.parse(localStorage.getItem('user')))
        } else {
            localStorage.clear();
        }
    }, [])

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        const getData = async () => {
            const resp = await fetch(`http://localhost:4000/update_user/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer: ${token}`
                },
                body: JSON.stringify(user)
            })
            const data = await resp.json()
        }
        if (token && user._id) {
            getData();
        }
    }, [user])

    const handleLogin = async (e) => {

        // Gets user and alerts bad user entry //

        e.preventDefault()
        const dataArr = [...e.target.elements].filter(item => item.value)
        let body = {}
        dataArr.forEach(item => {
            body[item.id] = item.value
        })
        const resp = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await resp.json()
        if (data.user) {
            data.user.history = []
            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('user', JSON.stringify(data.user))
            setUser(data.user)
            alert("Login Successful...")
        } else {
            alert(data.message)
        }
        document.forms["login"].reset()
    }

    if (user) {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home user={user} setUser={setUser} login={handleLogin} />} />
                    <Route path='/oneless' element={<OneLess user={user} setUser={setUser} />} />
                    <Route path='/onedoor' element={<OneDoor user={user} />} />
                    <Route path='/onesheep' element={<OneSheep user={user} />} />
                    <Route path='/moral' element={<Moral user={user} setUser={setUser} />} />
                    <Route exact path='/confessSins' element={<ConfessSins user={user} />} />
                    <Route exact path='/walkWord' element={<WalkWord user={user} />} />
                    <Route exact path='/salvation' element={<Salvation user={user} />} />
                    <Route exact path='/encourage' element={<Encourage user={user} />} />
                    <Route exact path='/introduce' element={<Introduce user={user} />} />
                    <Route exact path='/living' element={<Living user={user} />} />
                    <Route exact path='/onelessevent' element={<OneLessEvent user={user} />} />
                    <Route exact path='/oneliners' element={<Oneliners user={user} />} />
                    <Route exact path='/eternallySecure' element={<EternallySecure user={user} />} />
                    <Route path='/questions' element={<Questions user={user} />} />
                    <Route path='/support' element={<SupportUs user={user} />} />
                    <Route path='/prayer' element={<Prayer user={user} />} />
                    <Route path='/personal' element={<Personal user={user} />} />
                    <Route path='/user_edit/:id' element={<UserEdit user={user} setUser={setUser} />} />
                    <Route path='*' element={<BadUrl user={user} />} />
                </Routes>
            </Router>
        )
    } else {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home user={user} setUser={setUser} login={handleLogin} />} />
                    <Route path='/user_edit/:id' element={<UserEdit user={user} setUser={setUser} />} />
                    <Route path='*' element={<BadUrl user={user} />} />
                </Routes>
            </Router>
        )
    }

}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
