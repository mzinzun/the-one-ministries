function updateHistory(user, setUser, url) {
    // Used to track pages visited by each user //
    let temp = JSON.parse(JSON.stringify(user))
    temp.history.push(url)
    localStorage.setItem('user', JSON.stringify(temp));
    setUser(temp)
}

export {
    updateHistory
}