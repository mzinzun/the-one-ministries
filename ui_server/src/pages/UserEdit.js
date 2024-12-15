import { useState } from 'react';
import Button from '../components/Button.js';

const data = { className: 'goBack button', title: 'Go Back', onClick: () => window.history.back() }

const UserEdit = ({ user, setUser }) => {
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        // executes getting user //
        e.preventDefault()
        inputs[e.target.id] = e.target.value
        setInputs(inputs)
    }

    const handleMoral = (e) => {
        // morals on profile page //
        e.preventDefault()
        let newMoral = JSON.parse(JSON.stringify(user))
        newMoral[e.target.id] = e.target.value
        setUser(newUser)
    }

    const handleDelete = async () => {
        const quit = await fetch(`http://localhost:4000/delete_user/${user._id}`, {
            method: 'DELETE'
        })
        const resp = await quit.json()
        localStorage.clear()
        document.forms["signUp"].reset()
        alert(resp.message)
        setUser(false)
        setInputs({})
    }

    const handleSubmit = async (e) => {
        // executes user changes //
        e.preventDefault()
        if (user._id) {
            const token = JSON.parse(localStorage.getItem('token'))
            let obj = {}
            const data = [...e.target.elements].forEach(item => {
                if (item.value) {
                    obj[item.id] = item.value
                }
            })

            const resp = await fetch(`http://localhost:4000/update_user/${user._id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer: ${token}`
                    },
                    body: JSON.stringify(obj)
                })
            if (resp.status === 403) {
                alert(resp.statusText)
            } else {
                const answer = await resp.json()
                localStorage.setItem("user", JSON.stringify(answer))
                setUser(answer)
            }
        } else {
            let obj = {}
            const data = [...e.target.elements].forEach(item => {
                if (item.value !== "") {
                    obj[item.id] = item.value
                }
            })

            const resp = await fetch('http://localhost:4000/create_user',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(obj)
                })

            const answer = await resp.json()
            if (answer.success) {
                localStorage.setItem('token', JSON.stringify(answer.token))
                localStorage.setItem('user', JSON.stringify(answer.user))
                setUser(answer.user)
                alert("Login Successful.\nUse Go Back to Enter Website")
            } else {
                alert(answer.message)
            }
        }
    }

    return (
        <div className="register">
            <h5>Welcome to your Personal Profile Page</h5>
            <p>All your personal information will be kept here for a "quick look" at what you have saved in your page locations. You may edit from here or go to the webpage and update from there if desired.</p>
            <form id="signUp" onSubmit={handleSubmit}>
                <div className="form-group first">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        value={user._id ? user.firstName : inputs.firstName}
                        type="text"
                        className="form-control clear " id="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                        required
                    />
                    <br></br>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        value={user._id ? user.lastName : inputs.lastName}
                        type="text"
                        className="form-control clear" id="lastName"
                        placeholder="Last name"
                        onChange={handleChange}
                        required /><br></br>
                </div>
                <div className="form-group first">
                    <label htmlFor="email">Email address</label>
                    <input
                        value={user._id ? user.email : inputs.email}
                        type="email"
                        className="form-control clear" id="email" aria-describedby="emailHelp"
                        placeholder="example@email.com"
                        onChange={handleChange} required
                    />
                    <br></br>
                    <small id="emailHelp" className="form-text ">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group first">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control clear"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <br></br>
                    <br></br>
                </div>
                <div className="form-group form-check">
                </div>
                <div className="infoBtns">
                    <button type="submit" className="btn btn-warning"  id="submitBtn">Submit</button>
                </div>
                <div className="info"></div>
            </form>
            {user._id ? <button className="deleteMe" onClick={handleDelete}><span className="rojo">Delete Me</span></button> : null}
            <br></br>
            {
                user._id ? (
                    <div className="first">
                        <p>Moral Inventory </p>
                        <br />
                        <ol className="listing white">{user.morals.map((item, index) => <li key={index}>{item}<button className="moralInvBtn">Delete</button></li>)}</ol>
                    </div>)
                    : null
            }
            <Button data={data} />
            <Button data={{ className: 'newButton', url: "/", title: 'Home', li: [] }} />
        </div>
    )
}

export default UserEdit;
